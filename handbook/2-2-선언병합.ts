{
/**
 * interface 병합은 가장 일반적인 선언병합입니다.
 */
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10};
console.log(box);

//-----------------------------------------------------------------------------------------

/**
 * 여러 인터페이스가 있을 때, 모든 인터페이스의 이름은 같지만 각각의 타입은 다를 때 컴파일러는 에러를 발생합니다.
 */
interface Cloner {
    clone(animal: Animal): Animal;
}

interface Cloner {
    clone(animal: Sheep): Sheep;
}

// 이는 병합하여 하나의 인터페이스로 나타내주면 됩니다.
interface Cloner {
    clone(animal: Animal): Animal;
    clone(animal: Sheep): Sheep;
}

//-----------------------------------------------------------------------------------------

/**
 * 네임스페이스 병합 (Merging Namespaces)
 * 네임스페이스는 네임스페이스와 값을 모두 생성합니다.
 */

namespace Animals {
    export class Zebra { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}

// 아하...?
// 네임스페이스 값을 병합하려면, 각 선언 위치에서 이미 지정된 이름의 네임스페이스가 있을 경우, 기존 네임스페이스에 두 번째 네임스페이스의 내보낸 멤버를 첫 번째에 추가하여 네임스페이스 값을 확장됩니다.
namespace Animals {
    export interface Legged { numberOfLegs: number; }

    export class Zebra { }
    export class Dog { }
}



}