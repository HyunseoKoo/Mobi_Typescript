{
/**
 * 1. Partial<T> [일부 프로퍼티를 선택적으로 선택 (!)]
 * T가 가지고 있는 모든 프로퍼티를 선택적 프로퍼티로 만듭니다.
 */

interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: '책상 정리',
    description: '책 집어넣기',
};

const todo2 = updateTodo(todo1, {
    description: '쓰레기 버리기',
});

/**
 * 2. Readonly<T>
 * T가 가지고 있는 모든 프로퍼티를 읽기전용 프로퍼티로 만듭니다. 생성된 타입은 수정 불가합니다.
 */

interface Introduce {
    say: string;
}

const myIntroduce: Readonly<Introduce> = {
    say: 'Hi!',
};

myIntroduce.say = 'Hello!'; // 에러

/** 잘 이해 안 감!!!!
 * 3. Record<K,T>
 * T가 가지고 있는 모든 프로퍼티를 집합 프로퍼티 K로 만듭니다. 이는 타입의 프로퍼티들을 다른 타입에 매핑시키는데 사용될 수 있습니다.
 */

interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};

/**
 * 4. Pick<T,K>
 * T에서 프로퍼티 K의 집합을 선택해 타입을 구성합니다.
 */

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

/**
* 5. Omit<T,K> [타입 삭제]
* T에서 모든 프로퍼티를 선택한 다음 K를 제거한 타입을 구성합니다.
*/

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

/** 
 * 6. Exclude<T,U>
 * T에서 U에 할당할 수 있는 모든 속성을 제외한 타입을 구성합니다.
 */

type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number

/**
* 7. Extract<T,U> [추출]
* T에서 U에 할당 할 수 있는 모든 속성을 추출하여 타입을 구성합니다.
 */

type T3 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
type T4 = Extract<string | number | (() => void), Function>;  // () => void

/**
* 8. NonNullable<T>
* T에서 null 과 undefined를 제외한 타입을 구성합니다.
 */

type T5 = NonNullable<string | number | undefined>;  // string | number
type T6 = NonNullable<string[] | null | undefined>;  // string[]


/**
* 9. Parameters<T>
*함수 타입 T의 매개변수 타입들의 튜플 타입을 구성합니다.
*/

declare function f1(arg: { a: number, b: string }): void
type T7 = Parameters<() => string>;  // []
type T8 = Parameters<(s: string) => void>;  // [string]
type T9 = Parameters<(<T>(arg: T) => T)>;  // [unknown]
type T10 = Parameters<typeof f1>;  // [{ a: number, b: string }]
type T11 = Parameters<any>;  // unknown[]
type T12 = Parameters<never>;  // never
type T13 = Parameters<string>;  // 오류
type T14 = Parameters<Function>;  // 오

/**
10. ConstructorParameters<T> (이해안감)
ConstructorParameters<T> 타입은 생성자 함수 타입의 모든 매개변수 타입을 추출할 수 있게 해줍니다. 모든 매개변수 타입을 가지는 튜플 타입(T가 함수가 아닌 경우 never)을 생성합니다.
 */

type T15 = ConstructorParameters<ErrorConstructor>;  // [(string | undefined)?]
type T16 = ConstructorParameters<FunctionConstructor>;  // string[]
type T17 = ConstructorParameters<RegExpConstructor>;  // [string, (string | undefined)?]


/**
11. ReturnType<T>
함수 T의 반환 타입으로 구성된 타입을 만듭니다.
 */

declare function f1(): { a: number, b: string }
type T18 = ReturnType<() => string>;  // string
type T19 = ReturnType<(s: string) => void>;  // void
type T20 = ReturnType<(<T>() => T)>;  // {}
type T21 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type T22 = ReturnType<typeof f1>;  // { a: number, b: string }
type T23 = ReturnType<any>;  // any
type T24 = ReturnType<never>;  // any
type T25 = ReturnType<string>;  // 오류
type T26 = ReturnType<Function>;  // 오류

/**
12. InstanceType<T>
생성자 함수 타입 T의 인스턴스 타입으로 구성된 타입을 만듭니다.
*/

class C {
    x = 0;
    y = 0;
}

type T27 = InstanceType<typeof C>;  // C
type T28 = InstanceType<any>;  // any
type T29 = InstanceType<never>;  // any
type T30 = InstanceType<string>;  // 오류
type T31 = InstanceType<Function>;  // 오류

}