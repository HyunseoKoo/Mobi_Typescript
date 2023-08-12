 ## 1. 타입가드는 무엇이고 왜 필요할까요?
타입가드는 컴파일러가 타입을 예측할 수 있도록 타입 범위를 좁혀 주어 type safety를 보장해줍니다.

타입가드는 js의 instanceof, typeof 연산자를 활용합니다.


 ## 2. 타입가드 종류의 예시를 들어보고, 얻을 수 있는 장점을 코드로 구현해보세요

함수의 매개변수가 유니온 타입일 경우, 조건문을 사용하여 입력된 매개변수 값이 유니온 타입들 중 특정 타입일 경우 액션할 수 있도록 지정해줍니다. 

```ts
function example(para: string | number) {
  para.substring(3); // error! para 값의 타입이 string인지 number인지 알 수 없기 때문.

  if (typeof para === "string") {
    // para가 string 타입일 경우 action 할 수 있도록 타입을 보장해줌!
    para.substring(3);
  }
}
```
