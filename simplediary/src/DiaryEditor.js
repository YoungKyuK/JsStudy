
import { useRef , useState } from "react";

const DiaryEditor = ( {onCreate} ) => {

            // HTML 접근가능
    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author  : "",
        content : "",
        emotion : 1,
    });
    
    // 성격이 같은 두 종류를 하나로 묶을 수도 있다.
    // const [ author , setAuthor ] = useState("");
    // const [ content, setContent] = useState("");


    // 똑같은 성질의 state가 2개이므로 하나로 합칠 수도 있다.
    const handleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        setState({
            ...state,
            [e.target.name] : e.target.value,
            // input의 name이 author이고, textarea의 name이 content라서
            // 각각 영역을 사용할 때 마다 렌더링 되므로 사용 가능하다.
        })
    }

    const handleSubmit = () => {
        if(state.author.length < 1 ){
            // focus
            authorInput.current.focus();
            return ;
        }

        if(state.content.length < 5 ){
            // focus
            contentInput.current.focus();
            return ; 
        }

        // console.log(state);
        onCreate(state.author, state.content, state.emotion);
        alert("저장 성공");
        setState({
            author : "",
            content : "", 
            emotion : 1,
        });
    }; 

    return (
    <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input ref={authorInput}
            name= "author"  // 이름까지 출력가능하다.
            value={state.author} 
            // input의 값이 바뀌었을 때 onChange 안에 있는 props(e) 콜백함수를 수행한다.
            // onChange={(e) => {
            //     setState({
            //         ...state,  // = content : state.content 이걸 스프레드 연산자로 줄여쓸 수 있다.  

            //                    // 순서를 바꾸게 되면 author : e.target.value가 먼저 나오게되고, 
            //                    // 그 다음 state로 또 변경이 되어 값이 입력되지 않는다.
            //                    // ...state 스프레드 연산자 다음 변경 될 target값을 입력해야 정상 작동된다.
            //         author : e.target.value,
                    
            //     });
            onChange={handleChangeState}/>
        </div>
        <div>
            <textarea 
            ref = {contentInput}
            name ="content"
            value ={state.content}
            onChange={handleChangeState}/>
        </div>
        <div>
            <span>오늘의 감정점수 : </span>
            <select name="emotion"
                    value={state.emotion}
                    onChange={handleChangeState}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select> 
            
        </div>

        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>
 );   
};

export default DiaryEditor;