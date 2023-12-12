import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {

    // useNavigate : 페이지를 이동시킬 수 있는 함수를 반환
    const navigate = useNavigate();

    // 비구조화 할당 : 배열이나 객체의 속성 혹은 값을 해체하여 그 값을 변수에 각각 담아 사용하는 자바스크립트 표현식입니다.
    // 예시 코드 : const [변수명1, 변수명2, 변수명3] = [값1, 값2, 값3];
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id');
    console.log("id :", id);
    const mode = searchParams.get('mode');
    console.log("mode :", mode );

    return (
    <div>
        <h1>Edit</h1>
        <p>이곳은 일기 수정 페이지 입니다.</p>
        <button onClick={()=>setSearchParams({who:'winterload'})}>QS 바꾸기</button>

        <button onClick={()=>{
            navigate("/home");
        }}>HOME으로 가기</button>

        <button onClick={()=>{
            navigate(-1);
        }}>뒤로가기</button>
    </div>
    );
 };

 export default Edit;