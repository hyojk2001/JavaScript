console.log('Menu')
console.log('1. Ice Americano')
console.log('2. Cafe Latte')
console.log('3. Cappuccino')
console.log('4. Tea')
var count = 0

while(count < 3){
  var choice = parseInt(prompt('메뉴를 선택해 주세요.'));
  console.log(choice + '번 메뉴를 선택하셨습니다.');

  switch(choice){
    case 1:
      console.log('아이스 아메리카노는 1500원입니다.');
      break;
    case 2:
      console.log('카페 라떼는 1800원입니다.');
      break;
    case 3:
      console.log('카푸치노는 2000원입니다.');
      break;
    case 4:
      console.log('홍차는 1300원입니다');
      break;
    default:
      console.log('그런 메뉴는 없습니다.')
      break;
  }
  count++
}

/////////////////////////////////////////////////////////////////

var count = 0

while(true){
  var ans;
  ans = parseInt(prompt('1 + 1 = ?'))
  if(ans != 2){
    console.log(ans + '는 답이 아닙니다.')
    console.log((++count) + '번 틀렸습니다. 다시 도전하세요.')
    continue
  }

  ans = parseInt(prompt('7 - 3 = ?'))
  if(ans != 4){
    console.log(ans + '는 답이 아닙니다.')
    console.log((++count) + '번 틀렸습니다. 다시 도전하세요.')
    continue
  }

  break
}

/////////////////////////////////////////////////////////////////

var a = Math.ceil(Math.random()*10)
var b = Math.ceil(Math.random()*10)

var solution = a * b

var ans;
ans = parseInt(prompt(a + '*' + b + '=?'))

if(ans == solution){
  console.log('맞았습니다.')
}else{
  console.log('틀렸습니다.')
}