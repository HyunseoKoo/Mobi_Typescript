{
/** 1. Interface
 * 타입스크립트의 타입 검사는 값의 형태에 집중합니다. [duck typing / structural sub-typing]
 * interface는 코드 내에서 따라야하는 "규약"입니다.
 * interface는 타입 검사 원칙을 따릅니다.
 * 함수의 인자에 interface로 지정한 프로퍼티가 존재하고, 해당 프로퍼티의 타입과 일치하는지만 확인하며 property의 순서는 상관없습니다.
 */

interface TeamName {
    name: string;
}

function printTeamName(teamObj: TeamName) {
    console.log(teamObj.name);
}

let myTeam = {name: "Mobi", member: 6};
printTeamName(myTeam); // Mobi

//----------------------------------------------------------------------------------------------------------

/** 2. Optional Properties
 * 함수 인자에 interface를 설정할때, 인자는 interface가 지닌 모든 프로퍼티를 지니지 않아도 됩니다.
 * 이를 선택적 프로퍼티 (Optional Properties)라고 합니다.
 * interface 프로퍼티 뒤에 ?를 붙여서 선택적 프로퍼티로 만들어줍니다.
 * 선택적 프로퍼티들은 몇개의 프로퍼티만 채워 함수의 인자로 설정되는 "option bags"과 같은 패턴을 만들 때 유용합니다.
 */

interface FitCheck {
    height?: number;
    gender?: string;
}

function createClothes(check: FitCheck): {size: number; shape: string} {
    let newClothes = {size: 165, shape: "round"};
    if(check.height) {
        newClothes.size = check.height;
    }
    if(check.gender === "w") {
        newClothes.shape = "round";
    } else if(check.gender === "m") {
        newClothes.shape = "square";
    }
    return newClothes;
}

let myClothes = createClothes({height: 170})    // { size: 170, shape: 'round' }
let myClothes2 = createClothes({gender:'m'})    //  { size: 165, shape: 'square' }
let myClothes3 = createClothes({height: 185, gender:'m'}) // { size: 185, shape: 'square' }

//----------------------------------------------------------------------------------------------------------

/** 3. Readonly properties
 * interface 프로퍼티 앞에 [Readonly]를 붙이면 해당 프로퍼티는 수정이 불가합니다.
 * 한번 변수를 선언하면 재할당이 불가한 const와 유사합니다. const는 변수에 사용하고 readonly는 interface 프로퍼티에 사용합니다. 
 */

interface Body {
    readonly height: number;
    eyes: number;
}

let mySpec: Body = {height: 165, eyes: 1.3};
// mySpec.height = 170; // error
mySpec.eyes = 1.0;

//----------------------------------------------------------------------------------------------------------

/** 4. Excess Property Checks
 * target type이 지니고 있지 않은 프로퍼티의 경우 에러로 처리합니다. 
 */

interface FitCheck {
    height?: number;
    gender?: string;
}

function createClothes2(check: FitCheck): {size: number; shape: string} {
    let newClothes = {size: 165, shape: "round"};
    if(check.height) {
        newClothes.size = check.height;
    }
    if(check.gender === "w") {
        newClothes.shape = "round";
    } else if(check.gender === "m") {
        newClothes.shape = "square";
    }
    return newClothes;
}

/*
let myClothes4 = createClothes2({height: 170, weight: 55})    
console.log(myClothes4); // error
//이유 ? error TS2345: Argument of type '{ height: number; weight: number; }' is not assignable to parameter of type 'FitCheck'.
//Object literal may only specify known properties, but 'weight' does not exist in type 'FitCheck'. Did you mean to write 'height'?
*/

// 이러한 에러 감지를 피하기 위해서 타입 단언을 사용합니다. 객체 뒤에 'as interface이름'을 붙여서 타입 단언을 만들어줍니다.
let myClothes4 = createClothes2({height: 170, weight: 55} as FitCheck);
console.log(myClothes4); // { size: 170, shape: 'round' }

// 만약 함수 인자로 interface에서 지정한 프로퍼티 외에 추가 프로퍼티가 있음을 확신한다면, 문자열 인덱스 서명(string index signatuer)을 추가하는 것이 좋습니다.
interface FitCheck2 {
    height?: number;
    gender?: string;
    [propName: string]: any; // 실행 단계에서 어떤 타입의 추가 프로퍼티가 있을지 예상할 수 없으므로 any로 타입을 지정해줍니다.
}

function createClothes3(check: FitCheck2): {size: number; shape: string} {
    let newClothes = {size: 165, shape: "round"};
    if(check.height) {
        newClothes.size = check.height;
    }
    if(check.gender === "w") {
        newClothes.shape = "round";
    } else if(check.gender === "m") {
        newClothes.shape = "square";
    }
    return newClothes;
}

let myClothes5 = createClothes3({height: 170, weight: 55});
console.log(myClothes5); // { size: 170, shape: 'round' }

//----------------------------------------------------------------------------------------------------------

/** 5. Function Types
 * interface는 프로퍼티로 타입을 지정하는 것뿐만 아니라 함수 타입도 지정할 수 있습니다.
 * 타입스크립트 일반 함수와 같이 인자와 반환값의 타입이 모두 지정되어야 하는 것과 비슷합니다.
 */

interface IsHotSource {
    (includeWord: string, ingredient: string): boolean;
}

let mySource: IsHotSource;
mySource = function(includeWord: string, ingredient: string) {
    let result = ingredient.search(includeWord);
    return result > -1;
}

console.log(mySource('hot', 'hotPepper')); // true
console.log(mySource('hot', 'normalPepper')); // false

//----------------------------------------------------------------------------------------------------------

/**
 * 6. Indexable Types
 * 인덱스로 배열의 특정 값을 나타낼 수 있습니다.
 */

interface FruitsArray {
    [value: number]: string; // 인덱싱할 값과 반환할 값의 타입을 각각(number & string) 지정합니다.
}

let myArray: FruitsArray;
myArray = ['사과', '오렌지', '딸기', '포도'];

let str: string = myArray[2];
console.log(str); // 딸기

//----------------------------------------------------------------------------------------------------------

/** 7. Implementing an interface
 * 
 */


}


/** 이해 xx
 * 6. Indexable Types의 2번째 예시 (extends)  ~
 */