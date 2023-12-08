import React, {useCallback, useEffect, useMemo, useReducer, useRef} from 'react';
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

//2개의 parameter를 받는데 첫번째로는 상태변화가 일어나기 직전의 state,
// 두번째는 어떤 상태변화를 일으켜야 하는지의 정보가 담겨있는 action 객체
// reduce가 return하는 값은 새로운 상태의 값이다.

// action 객체에서 data 프로퍼티를 꺼내서 리턴해주면 새로운 state가 된다.
const reducer = (state, action) => {
  switch(action.type){
    case 'INIT': {
      return action.data
    }
    case 'CREATE': {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date
      }
      return [newItem, ...state];
    }
    case 'REMOVE': {
      return state.filter((it)=>it.id !== action.targetId);
    }
    case 'EDIT': {
      return state.map((it)=> it.id === action.targetId ? {...it, content:action.newContent } : it
      );
    }
    default :
    return state;
  }
}


// export default는 파일 하나당 한개밖에 쓸 수 없음, default가 없는거는 여러가지 사용 가능.
export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

const App = () => {

  // hook이 아닌 reducer로 작업할꺼라 주석처리
  // const [data, setData] = useState([]);

  // 복잡한 상태변화 로직을 컴포넌트 밖으로 분리하려고 reducer를 사용한다.
  // dispatch를 호출하면 reduce가 실행되고 그 reduce가 리턴하는 값이 data의 값이 된다.
  const [data, dispatch] = useReducer(reducer, []);

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
    });

    dispatch({type:"INIT", data:initData});
  };
  useEffect( () => {
    getData();
  },[])

  // 일기를 삭제하거나, 수정할때도 계속 리렌더링이 되서 생성할 때만 렌더링 될 수 있도록 useCallback 사용
  const onCreate = useCallback(
    ( author, content, emotion ) => {
      dispatch({type:'CREATE', data:{author, content, emotion, id:dataId.current}})
    // const created_date = new Date().getTime();
    // const newItem = {
    //   author,
    //   content,
    //   emotion,
    //   created_date,
    //   id : dataId.current // 0
    // }
    dataId.current += 1;
    // 함수형업데이트(data) : setData는 원래 상태변화함수에 값을 전달하고, 그 값이 새로운 stats의 값으로 바뀐다. 함수를 전달해도된다.
    // setData( (data) => [newItem, ...data]);
  }, []
  );

  const onRemove = useCallback((targetId) => {
    // console.log(`${targetId}가 삭제되었습니다.`);
    // console.log(newDiaryList);

    dispatch({type:"REMOVE",  targetId});
  //   setData( (data) => data.filter((it) =>it.id !== targetId));
   },[]);

  const onEdit = useCallback((targetId, newContent ) => {

    dispatch({type:"EDIT", targetId, newContent})
  //   setData( (data) => 
  //     data.map((it)=>it.id === targetId ? {...it, content:newContent} : it)
  //   );
   },[]);

   // 뎁스가 재생성 될일 없게 빈배열로 해준다.
   const memoizedDispatches = useMemo( ()=> {
     return {onCreate, onRemove, onEdit }
   }, []);

  const getDiaryAnalysis = useMemo (
    () =>{
    // console.log("일기 분석 시작!");
    const goodCount = data.filter((it) =>it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length ) * 100;
    return {goodCount, badCount, goodRatio};
  }, [data.length]
  );

                          
  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  //Provider 공급자 compoment로 mapping을 해준다.
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}> 
    <div className="App">
      <DiaryEditor />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수: {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList />
    </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
