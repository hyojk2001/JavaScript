var a = Math.ceil(Math.random() * 10);
var b = Math.ceil(Math.random() * 10);

var solution = a * b;

var ans;

count = 0
console.log('답은 %d 입니다',solution);
do{
    ans = parseInt(prompt(a + '*' + b + '=?'));
    console.log((++count)+'회 틀렸습니다');
}while(ans != solution)
console.log('맞았습니다.');