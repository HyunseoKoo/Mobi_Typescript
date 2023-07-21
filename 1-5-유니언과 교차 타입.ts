{
/**
* Union Types: OR
* 여러 타입 값들 중 하나를 선택할 수 있게 해줍니다.
*/
type Action = 'shake' | 'jump' | 'run' | 'dance';
function move(action: Action) {
    console.log(action);
}
move('run'); // run

type FontSize = 8 | 16 | 32;
const tile: FontSize = 16;
console.log(tile); // 16

/**
 * Intersection Types: &
 * 다양한 타입들을 하나로 묶어서 선언할 수 있음. 모든 타입들을 다 적어줘야 합니다.
 */
type Info = {
    name: string;
    age: number;
};

type LoginInfo = {
    Id: number;
    work: () => void;
};

function work(info : Info & LoginInfo) {
    console.log(info.name, info.age, info.work());
}

work({
    name: 'koo',
    age: 29,
    Id: 123,
    work: () => {},
})
}