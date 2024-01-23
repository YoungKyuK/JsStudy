import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import DiaryItem from "./DiaryItem";
const sortOptionList = [
    { value : "lastest", name:"최신순"},
    { value : "oldest", name:"오래된 순"},
];

const filterOptionList = [
    { value : "all" , name : "전부 다"},
    { value : "good", name : "좋은 감정만"},
    { value : "bad",  name : "안 좋은 감정만"}
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
    return (
    <select 
        className="ControlMenu"
        value={value} 
        onChange={(e)=>onChange(e.target.value)}
    >
        {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
            {it.name}
        </option>
        ))}
    </select>
    );
});

const DiaryLists = ({diaryLists}) => {
    const navigate = useNavigate();
    const [ sortType, setSortType ] = useState("latest");
    const [filter, setFilter] = useState("all");

    const getProcesseDiaryList = () => {

        const filterCallback = (item) => {
            if( filter === 'good'){
                return parseInt(item.emotion) <= 3;
            } else {
                return parseInt(item.emotion) > 3;
            }
        }

        // 비교함수
        const compare = ( a,b ) => {
            if(sortType === "latest"){
                // 문자열이 들어올 수 있기때문에 parseInt를 써준다.
                return parseInt(b.date) - parseInt (a.date);
            } else {
                return parseInt(a.date) - parseInt (b.date);
            }
        };

        const copyList = JSON.parse(JSON.stringify(diaryLists));

        const filteredList = 
        filter === 'all' ? copyList : copyList.filter((it)=>filterCallback(it));

        const sortedList = filteredList.sort(compare);
        return sortedList;
    }

    return ( 
    <div className="DiaryLists">

        <div className="menu_wrapper">
            <div className="left_col">
                <ControlMenu 
                    value={sortType} 
                    onChange={setSortType} 
                    optionList={sortOptionList} 
                />
                <ControlMenu 
                    value={filter}
                    onChange={setFilter}
                    optionList={filterOptionList}
                />
            </div>
            <div className="right_col">
                <MyButton 
                type={'positive'} 
                text={'새 일기 쓰기'} 
                onClick={()=>navigate('/new')}
                />
            </div>
        </div>  

            {getProcesseDiaryList().map((it) => (
            <DiaryItem key={it.id} {...it} />
            ))}
    </div>
    );
} 

DiaryLists.defaultProps={
    diaryLists: [],
}

export default DiaryLists;