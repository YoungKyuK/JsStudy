import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// https://jsonplaceholder.typicode.com/comments  : 


// const dummyList = [
//   {
//     id : 1,
//     author : "김영규1",
//     content : "Hello1",
//     emotion : 5,
//     created_date : new Date().getTime()
//   },
//   {
//     id : 2,
//     author : "김영규2",
//     content : "Hello2",
//     emotion : 3,
//     created_date : new Date().getTime()
//   },
//   {
//     id : 3,
//     author : "김영규3",
//     content : "Hello3",
//     emotion : 1,
//     created_date : new Date().getTime()
//   }
// ];

function App() {

  const [data, setData] = useState([]);

  // id는 고유값이라 useRef로 만든다.
  const dataId = useRef(0);

  const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res)=>res.json());
    // console.log(res);

    const initData = res.slice(0,20).map( (it) => {
      return {
        author  : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5)+1, //floor : 소수점 버림,
        created_date : new Date().getTime(),
        id : dataId.current++
      }
    })
    setData(initData);
  };

  useEffect( () => {
    getData();
  },[])

  // 일기를 삭제하거나, 수정할때도 계속 리렌더링이 되서 생성할 때만 렌더링 될 수 있도록 useCallback 사용
  const onCreate = useCallback(
    (author, content, emotion ) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current // 0
    }
    dataId.current += 1;
    // 함수형업데이트(data) : setData는 원래 상태변화함수에 값을 전달하고, 그 값이 새로운 stats의 값으로 바뀐다. 함수를 전달해도된다.
    setData( (data) => [newItem, ...data]);
  },

  []
  );

  const onRemove = useCallback((targetId) => {
    // console.log(`${targetId}가 삭제되었습니다.`);
    // console.log(newDiaryList);
    setData( (data) => data.filter((it) =>it.id !== targetId));
  },[]);

  const onEdit = useCallback((targetId, newContent ) => {
    setData( (data) => 
      data.map((it)=>it.id === targetId ? {...it, content:newContent} : it)
    );
  },[]);

  const getDiaryAnalysis = useMemo(
    () =>{
    // console.log("일기 분석 시작!");
    const goodCount = data.filter((it) =>it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length ) * 100;
    return {goodCount, badCount, goodRatio};
  }, [data.length]
  );

                          
  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수: {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
