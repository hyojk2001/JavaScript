function shadowing_example(){
    var val = 5;        //함수에서 똑같은 변수로 초기화 선언하면 함수 바깥과 이름이 같더라도 서로 다른 변수이다. 지역변수
    console.log('F', val);
    val++;  // val = 2
}

var val = 0;            //전역변수
shadowing_example();
console.log('O', val);