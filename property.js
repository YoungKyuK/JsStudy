let person = {   // 객체 리터럴 방식
    
    name : "김영규",
    age : "30",

    say : function(){
        console.log(`안녕 나는 ${(this.name)}`);
    }

};// 프로퍼티 (객체 프로퍼티) : 객체가 가지고 있는 데이터
//person.name = null; // 메모리에서 날릴 수 있는 확실한 삭제 방법 (delete는 메모리에 남아있음)

person.say();

console.log(`name : ${"name" in person}`) // person 객체 안에 name 프로퍼티가 있는지 확인