## ⚙️ ts config ?
ts config.json은 타입스크립트 설정 파일로 타입스크립트를 자바스크립트로 변환할 때 설정을 정의해놓는 파일입니다. 타입스크립트를 사용하려면 ts config.json을 만들어주어야 합니다.

ts config가 있으면 tsc 라는 명령어로 ts파일을 js파일로 변환할 수 있습니다.

    tsc app.ts
    ➡️ app.ts 파일이 변환되어 app.js 파일이 생성됨!

ts config는 매번 tsc 명령어에 옵션을 주기가 힘들기 때문에, 프로젝트에서 특정 설정들을 유지시키기 위해서 사용합니다. 프로젝트 컴파일을 하기 위한 루트 파일들과 각종 컴파일러 옵션들을 관장합니다.

## ✨ ts config 역할 & 주요 옵션

### **1. File Inclusion 역할**

 ✅ include / exclude 옵션
    
: ts가 컴파일 하거나 하지 않을 파일들을 명시하고, 컴파일 하기 위해 참조해야 할 파일들을 설정

     {
        "include": ["src/**/*", "tests/**/*"],
        "exclude": ["node_modules"]
     }

 ✅ extends

: 상속받을 다른 base file 명시하는 역할로, 특정 타입스크립트 설정 파일의 설정 사항을 추가할 수 있는 속성.


    // config/base.json
    {
    "compilerOptions": {
        "noImplicitAny": true
    }
    }

    // tsconfig.json
    {
    "extends": "./config/base"
    }

 ✅ files
    
: include 파일들을 개별적으로 포함시켜 tsc 실행할 때마다 대상 파일의 경로를 지정하지 않고 설정 파일을 미리 정의.

    {
    "files": ["app.ts", "./utils/math.ts"]
    }

#### **2. Compiler Options 역할**

타입스크립트가 컴파일 되는 방식, 동작 방식을 설정합니다.
많은 옵션들이 있으나 자주 사용하는 설정들로는 아래와 같습니다.

✅ lib

: 자바스크립트로 컴파일할 때 포함될 라이브러리의 목록을 지정. 가장 대표적인 활용 예시에는 async 코드 컴파일 시 Promise 객체 설정이 필요.

    {
        "lib": ["es2015", "dom", "dom.iterable"]
    }

✅ target

: 컴파일 되는 자바스크립트의 버전을 지정. 기본 es3부터 es5, es6, esnext까지 지정 가능

    {
        "target": "esnext"
    }

✅ allowJs

: 타입스크립트 파일 코드가 변경되면 자동으로 자바스크립트 파일에도 적용시켜주는 속성

✅ removeComments

: js 컴파일 시 모든 주석을 제거하는 옵션. 기본적으로 false로 주석을 제거하고 싶다면 true로 변경해줘야 함.

✅ Strict Checks

: 타입을 얼마나 엄격하게 검사할지 설정하는 옵션. 아래와 같이 8가지 옵션 존재.

    1) strict

    2) alwaysStrict

    3) noImplicityAny

    4) noImplycityThis

    5) strictBindCallApply

    6) strictFunctionTypes

    7) strictNullChecks

    8) strictPropertyInitialization

## ts config를 활용하여 ts project를 만들고 상대 경로를 절대 경로로 만들어 import 해보세요!
