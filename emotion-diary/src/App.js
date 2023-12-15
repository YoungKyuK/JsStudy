import React,{ useReducer, useRef } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';


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
 return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();


function App() {
  
  // 배열의 비구조화할당에 0번째 인자는 항상 state이다. 그래서 기존 state 이름인 data를 넣고
  // 두번째는 반드시 dispatch로 넣어줘야한다.
  // useReducer(reducer, []) 두개의 인자를 꼭 전달해야하는데,
  // 첫번째 인자는 reducer(상태변화 처리함수), 두번째 인자는 state의 초기값
  // 상태변화처리함수인 reducer는 컴포넌트 밖으로 분리하여 직접 만들어줘야한다. (그래서 ,[]를 밖으로 분리)
  const [data, dispatch] = useReducer(reducer, []);

  // 일기 id로 사용
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
              <Route path="/" element={<Home />} />
              <Route path='/new' element={<New/>} />
              <Route path='/edit' element={<Edit/>} />
              <Route path='/diary/:id' element={<Diary/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>

  );
};

export default App;
