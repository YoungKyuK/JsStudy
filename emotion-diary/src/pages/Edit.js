import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {

    const [originData, setOriginData] = useState();
    // useNavigate : 페이지를 이동시킬 수 있는 함수를 반환
    const navigate = useNavigate();
    const { id } = useParams();

    const diaryList = useContext(DiaryStateContext);
    // console.log(diaryList);
    // console.log(id);

    // id나 diaryList 변할때만 꺼내와서 변경해줘야 하기때문에 useEffect을 사용해서 변경해준다.
    useEffect(() => {
      if( diaryList.length >=1 ){
        const targetDiary = diaryList.find(
          (it) =>parseInt(it.id) === parseInt(id)
        );
        //console.log(targetDiary);

        // 없는 일기 데이터는 홈으로 보내준다.
        if(targetDiary){
          setOriginData(targetDiary);
        }else{
          navigate('/', {replace : true})
        }
      }
    }, [id, diaryList])

    return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
    );
 };

 export default Edit;