import './App.css';

function App() {

  let name = "홍길동";


  return (
    <div className="App">
      <header className="App-header">
        <h2>안녕 리액트 {name} </h2>
      </header>
    </div>
  );
}

// 1개만 내보낼수 있다.
export default App;
