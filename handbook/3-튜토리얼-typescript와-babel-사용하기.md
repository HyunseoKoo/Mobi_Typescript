### Babel vs TypeScript의 tsc

#### tsc(TypeScript complier)란?
컴파일이란 작성된 코드를 컴퓨터가 이해하고 실행할 수 있는 형태의 파일로 변환하는 과정을 뜻합니다.
브라우저는 자바스크립트 코드를 바로 이해하고 실행할 수 있습니다.
원래 자바스크립트는 이러한 브라우저에서 실행되기에 컴파일이 별도로 필요없는 인터프리티어 언어입니다.

하지만 자바스크립트 프로젝트에 타입을 지정하며 타입스크립트를 사용하게 되면서 자바스크립트도 컴파일이 필요하게 되었습니다.
브라우저는 타입스크립트 코드를 바로 이해하고 실행할 수 없기 때문에, 배포할 때 반드시 코드를 자바스크립트로 변환해주어야 합니다.

타입스크립트 컴파일러는 타입스크립트 코드를 자바스크립트 코드로 변환해줍니다.

#### Babel
바벨 역시 자바스크립트 컴파일러입니다. 정확히는 트랜스파일러로, 한 언어로 작성된 코드를 비슷한 수준의 추상화를 가진 언어로 변환하는 것을 뜻합니다.

바벨은 자바스크립트가 실행되는 여러 환경에서 각자 다른 자바스크립트 엔진을 통해 코드를 문제없이 변환할 수 있게 도와줍니다.
특정 버전 이상 혹은 특정 브라우저에서는 실행되지 않는 코드가 있는데 이때 모든 자바스크립트 실행 환경에서 정상적으로 동작할 수 있도록 도와줍니다.

ts-node, ts-jest, ts-karma, create-react-app-typescript 등 여러가지 컴파일러를 커스터마이징을 통해 사용하는 대신에 Babel로 해결 가능합니다.

### tsc vs babel
트랜스파일링은 Babel, 타입은 tsc를 이용합니다.