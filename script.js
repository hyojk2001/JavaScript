var req = new XMLHttpRequest(); //객체 생성
req.open('GET', './image_list.json'); //이미지 파일을 얻어오도록 설정
req.onreadystatechange=function(){  //콜백 함수 등록
    if(this.readyState==4){  //모든 데이터가
        console.log(this.response);
    }
}
req.send();     //해당 요청을 전송