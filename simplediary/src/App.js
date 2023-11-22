import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


const dummyList = [
  {
    id : 1,
    author : "김영규1",
    content : "Hello1",
    emotion : 5,
    created_date : new Date().getTime()
  },
  {
    id : 2,
    author : "김영규2",
    content : "Hello2",
    emotion : 3,
    created_date : new Date().getTime()
  },
  {
    id : 3,
    author : "김영규3",
    content : "Hello3",
    emotion : 1,
    created_date : new Date().getTime()
  }
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
