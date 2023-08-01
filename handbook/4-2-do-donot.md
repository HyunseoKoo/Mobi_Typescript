### 1. 일반 타입
Number, String, Boolean, Symbol, Object 타입들은 JavaScript 코드에서 거의 사용되지 않는 비-원시형 객체로 사용하지 말아야 하며, 대신에 number, string, boolean, symbol 타입을 사용해야 합니다.

```ts
function test(s: string): string;
```

### 2. 제네릭
타입 매개변수를 사용하지 않는 제네릭 타입을 사용하지 말아야 합니다.

### 3. 콜백 타입
사용하지 않는 콜백의 반환 값 타입에 any를 사용하지 말고 void를 사용해야 합니다.

잘못된 예시
```ts
function fn(x: () => any) {
    x();
}
```

좋은 예시
```ts
function fn(x: () => void) {
    x();
}
```

### 4. 오버로드와 콜백
콜백의 인수만 다른 오버로드를 분리하지 않고 최대 인수를 사용해 하나의 오버로드를 작성해야 합니다.

잘못된 예시
```ts
declare function beforeAll(action: () => void, timeout?: number): void;
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;
```

좋은 예시
```ts
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;
```

### 5. 함수 오버로드
#### [순서]
구체적인 오버로드를 먼저 작성합니다.

잘못된 예시
```ts
declare function fn(x: any): any;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;

let myElem: HTMLDivElement;
let x = fn(myElem);
```

좋은 예시
```ts
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: string, :)
```

### 6. 유니언 타입 사용
한 인수 위치에서 타입만 다른 오버로드를 사용하지 말아야 합니다.

잘못된 예시
```ts
interface Moment {
    utcOffset(): number;
    utcOffset(b: number): Moment;
    utcOffset(b: string): Moment;
}
```

좋은 예시
```ts
interface Moment {
    utcOffset(): number;
    utcOffset(b: number|string): Moment;
}
```