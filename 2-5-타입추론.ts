{
/**
* Type Inference (타입 추론)
*/
let text = 'string';
//text = 1; (에러) => text라는 변수는 선언함과 동시에 string을 할당했기 때문에, string으로 타입 유추 가능.

function print(message = 'hello') {
   console.log(message);
}
print('hello');

function plus(x:number, y:number): number {
   return x + y;
}
const result = plus(1, 2); // result는 자동으로 number 타입 명시해줌.
}