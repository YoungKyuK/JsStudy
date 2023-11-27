import {useEffect, useRef, useState} from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
// import Lifecycle from './Lifecycle';

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
    console.log(res);

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

  const onCreate = (author, content, emotion ) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current // 0
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) =>it.id !== targetId);
    // console.log(newDiaryList);
    setData(newDiaryList);
  }

  const onEdit = (targetId, newContent ) => {
    setData(
      data.map((it)=>it.id === targetId ? {...it, content:newContent} : it
      )
    );
  };

  return (
    <div className="App">
      {/* <Lifecycle /> */}
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
