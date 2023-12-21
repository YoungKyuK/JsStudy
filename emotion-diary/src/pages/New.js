
import { useNavigate } from "react-router-dom";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useState } from "react";


// toISOString() 자바스크립트 메서드이다 0~9까지가 연월일까지 표시가 되므로 자른다.
const getStringDate = ( date ) => {
    return date.toISOString().slice(0,10);
}

const New = () => {

    const [ date, setDate ] =useState(getStringDate(new Date));

    const navigate = useNavigate();
    return (
    <div>
       <MyHeader headText={'새 일기쓰기'} 
       leftChild={<MyButton text={'< 뒤로가기'} onClick={() => navigate(-1) }/>}/>

        <div>
            <section>
                <h4>오늘은 언제인가요?</h4>
                <div className="input-box">
                    <input 
                    className="input-date"
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    type="date" />
                </div>
            </section>
        </div>
    </div>

   
    );
 };

 export default New;