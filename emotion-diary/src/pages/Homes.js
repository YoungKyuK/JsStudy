import { useContext, useEffect, useState } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { DiaryStateContext } from "../App";
import DiaryLists from "../components/DiaryLists";

 const Homes = () => {

    const diaryList = useContext(DiaryStateContext);

    const [data, setData] = useState([]);
    const [ curDate, setCurDate] = useState( new Date());
    // getMonth는 0월부터 시작 그래서 현재월은 +1 해줘야 함.
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;  

    console.log(headText);

    useEffect( ()=>{
        if(diaryList.length >= 1){
            
        const firstDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth(),
            1
        ).getTime();

        // 23시 59분 59초로 날짜를 잡아야 31일까지 나온다.
        const lastDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth() + 1,
            0,
            23,
            59,
            59
        ).getTime();

       setData(
        diaryList.filter((it)=> firstDay<=it.date && it.date <= lastDay )
       )
    };
    },[diaryList, curDate]);

    useEffect( ()=> {
        //console.log(data);
    }, [data])

    const increaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1 , curDate.getDate() ))
    }

    const decreaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() -1, curDate.getDate() ))
    }

    return (
    <div>
      <MyHeader headText={headText}
      leftChild={<MyButton text={'<'} onClick={decreaseMonth}/>}
      rightChild={<MyButton text={'>'} onClick={increaseMonth}/>}
      />
      <DiaryLists diaryLists={data}/>
    </div>
    );
 };

 export default Homes;