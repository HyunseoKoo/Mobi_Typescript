{
/**
 * 타입스크립트에는 class, namespace, module이 있지만, 함수는 어떤 일을 어떻게 할것인지 정의하는데 핵심적으로 작동합니다.
 * 타입스크립트는 자바스크립트에 몇가지 기능들이 추가 되어있습니다.
 */

/**
 * 1. js처럼 ts도 기명함수와 익명함수 두가지 방법으로 함수를 만들 수 있습니다.
 */

// 기명함수
function introduce(name: string, age: number): string {
    return `제 이름은 ${name}이고 나이는 ${age}살입니다 :)`
}

// 익명함수
let myIntroduce = function(name: string, age: number): string {
    return `제 이름은 ${name}이고 나이는 ${age}살입니다 :)`
}
console.log(myIntroduce('mobi', 1)); // 제 이름은 mobi이고 나이는 1살입니다 :)

// 화살표함수 표현법
let myIntroduce2: (name: string, age: number) => string =
    function(name: string, age: number): string {
        return `제 이름은 ${name}이고 나이는 ${age}살입니다 :)`
    }
console.log(myIntroduce2('mobi', 1)); // 제 이름은 mobi이고 나이는 1살입니다 :)


//----------------------------------------------------------------------------------------------------------

/**
 * 2. 타입의 추론 (Inferring the types)
 * ?? 한번만 타입을 지정해주면 타입을 알아서 지정해줍니다. (?)
 * 
 */
let myIntroduce3: (name: string, age: number) => string =
    function(name, age) {
        return `제 이름은 ${name}이고 나이는 ${age}살입니다 :)`
    }
console.log(myIntroduce3('mobi', 1)); // 제 이름은 mobi이고 나이는 1살입니다 :)

//----------------------------------------------------------------------------------------------------------

/**
 * 3. 선택적 매개변수와 기본 매개변수 (Optional and Default Parameter)
 * 함수의 매개변수가 지정한 매개변수보다 많고 적을 때 결과값이 다르게 나옵니다.
 */

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // Bob
// let result2 = buildName("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result3 = buildName("Bob", "Adams");         // Bob Adams
console.log(result1);
// console.log(result2);
console.log(result3);

//----------------------------------------------------------------------------------------------------------

/**
 * 4. 나머지 매개변수 (Rest Parameters)
 * 여러개의 매개변수를 그룹으로 작업하거나 함수가 얼마나 많은 매개변수를 가질지 모를때 사용합니다.
 */

function add(...numbers: number[]): number {
    return numbers.reduce((a,b) => a+b)
}   
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3 ,4)); // 10
console.log(add(1, 2, 3, 4, 5)); // 15




}


/** 이해 xx
 * 2. 타입의 추론 (Inferring the types) 
 * 5. this
 */