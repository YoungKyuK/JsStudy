
const DiaryList = ( {diaryList} ) => {
    console.log(diaryList);
    return (
    <div className="DiaryList">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
          {diaryList.map((it) => (   // diaryList의 객체들이 it으로 변환되어 들어오는 것이다.
            <div key={it.id}>
                <div>작성자 : {it.author}</div>
                <div>본문 : {it.content}</div>
                <div>감정 : {it.emotion}</div>
                <div>작성 시간(ms) : {it.create_date}</div>
            </div>
          ))}   
        </div>
    </div>
 );
};

// undefined으로 받아도 defaultProps로 설정해주면 에러 안 남.
DiaryList.defaulttProps = {
    diaryList : [],
};

export default DiaryList;