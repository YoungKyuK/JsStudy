import {useRef, useState} from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';



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

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data}/>
    </div>
  );
}

export default App;
