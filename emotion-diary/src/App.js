import React,{ useEffect, useReducer, useRef } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homes from './pages/Homes';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

// reducer : 현재 상태와 액션 객체를 Parameter로 받아와서 새로운 상태를 반환해주는 함수이다.
// ex) function reducer(state, action) {
// }
//reducer 사용법
//const [state, dispatch] = useReducer(reducer, initialState);
//여기서 state 는 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키게 되고, dispatch 는 액션을 발생시키는 함수라고 이해하면된다.
const reducer = ( state, action ) => {
  let newState = [];
  switch(action.type){
    case 'INIT' : {
      return action.data
  }
    case 'CREATE' : {
      const newItem = {
        ...action.data
      };
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE' : {
      newState = state.filter((it)=>it.id !== action.targetID);
      break;
    }
    case 'EDIT' : {
      newState = state.map((it)=>
      it.id === action.data.id ?  {...action.data} : it
      );
      break;
    };
   
    default :
      return state;
 }

 localStorage.setItem('diary', JSON.stringify(newState));
 return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();



function App() {

  useEffect( ()=> {
     const item1 = localStorage.getItem('item1');
     const item2 = localStorage.getItem('item2');
     const item3 = JSON.parse(localStorage.getItem('item3'));
     console.log( {item1, item2, item3});
  },[])
  
  // 배열의 비구조화할당에 0번째 인자는 항상 state이다. 그래서 기존 state 이름인 data를 넣고
  // 두번째는 반드시 dispatch로 넣어줘야한다.
  // useReducer(reducer, []) 두개의 인자를 꼭 전달해야하는데,
  // 첫번째 인자는 reducer(상태변화 처리함수), 두번째 인자는 state의 초기값
  // 상태변화처리함수인 reducer는 컴포넌트 밖으로 분리하여 직접 만들어줘야한다. (그래서 ,[]를 밖으로 분리)
  const [data, dispatch] = useReducer(reducer, []);

  // App 컴포넌트가 마운트 되었을 때
  useEffect( ()=> {
    const localData = localStorage.getItem('diary');
    if(localData){
      const diaryList = JSON.parse(localData).sort((a,b)=>parseInt(b.id) - parseInt(a.id));
      dataId.current = parseInt(diaryList[0].id) + 1

      console.log(diaryList);
      console.log(dataId);

      dispatch({type: "INIT", data:diaryList});
    }
  },[])

  // 일기 id로 사용
  // dummy data의 id가 1~5까지 있으므로 6번부터 시작해야 한다. 삭제했으므로 다시 0
  const dataId = useRef(0);
  // CREATE
  const onCreate = ( date, content, emotion )=> {
    dispatch({ type:"CREATE", data:{
      id : dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion
    }})
    dataId.current += 1;
  }

  // REMOVE
  const onRemove = ( targetID ) => {
    dispatch({ type:"REMOVE", targetID});
  }

  // EDIT
  const onEdit = ( targetID, date, content, emotion ) => {
    dispatch({ 
      type:"EDIT", 
      data:{
        id : targetID,
        date : new Date(date).getTime(),
        content,
        emotion
    }})
  }

  return (
    <DiaryStateContext.Provider value={data}> 
      <DiaryDispatchContext.Provider 
        value={{
          onCreate,
          onEdit,
          onRemove
        }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Homes />} />
              <Route path='/new' element={<New/>} />
              <Route path='/edit/:id' element={<Edit/>} />
              <Route path='/diary/:id' element={<Diary/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>

  );
};

export default App;
