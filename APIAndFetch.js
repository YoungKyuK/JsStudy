
// A P I 란 ? 레스토랑에 가서 손님( 클라이언트 )이 주문하면 웨이터(서버)가 찾고 냉장고(DB)에서 가져와서 다시 웨이터(서버)에 전달하고 음식을 서빙한다.

// Client -> Request(데이터 요청)  ->  Server -> Query ( 데이터 검색 ) -> Database -> Query Result(데이터 찾기) -> Server -> Response (데이터 전달) -> Client 

// 다른 프로그램한테 데이터를 받기위해 말을 건다. ( API )


async function getData (){
// fetch : API 호출을 도와주는 내장 메서드
let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts'); 
let jsonResponse = await rawResponse.json();
console.log(jsonResponse);
}
getData();

