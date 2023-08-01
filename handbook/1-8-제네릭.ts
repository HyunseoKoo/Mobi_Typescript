/**
 * 제네릭 (generics)
 * 매개변수로 받은 값을 그대로 반환하는 함수일 때 매개변수와 반환값 두 타입은 동일합니다.
 */

function identity(arg: any): any {
    return arg;
}
// 타입을 any로 지정할 경우 어떤 매개변수를 넣든 그 매개변수의 타입은 잃게 됩니다.

function identity2<T>(arg: T): T {
    return arg;
}