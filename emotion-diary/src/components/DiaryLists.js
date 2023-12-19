import { useState } from "react"

const sortOptionList = [
    { value : "lastest", name:"최신순"},
    { value : "oldest", name:"오래된 순"},
]

const ControlMenu = ( { value, onChange, optionList }) => {
    return (
    <select value={value} onChange={(e)=>onChange(e.target.value)}>
        {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
            {it.name}
        </option>
        ))}
    </select>
    );
}

const DiaryLists = ({diaryLists}) => {

    const [ sortType, setSortType ] = useState("lastest");

    const getProcesseDiaryList = () => {

        const compare = ( a,b ) => {
            if(sortType === "lastest"){
                return parseInt(b.date) - parseInt (a.date);
            } else {
                return parseInt(a.date) - parseInt (b.date);
            }
        };

        const copyList = JSON.parse(JSON.stringify(diaryLists));
        const sortedList = copyList.sort(compare);
        return sortedList;
    }

    return ( 
    <div>
        <ControlMenu 
        value={sortType} 
        onChange={setSortType} 
        optionList={sortOptionList} 
        />
        {getProcesseDiaryList().map((it) => (
            <div key= {it.id}>
                {it.content}
            </div>
        ))}
    </div>
    );
} 

DiaryLists.defaultProps={
    diaryLists: [],
}

export default DiaryLists;