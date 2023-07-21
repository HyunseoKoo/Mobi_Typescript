/**
 * Enums
 * 강의 참고
 */

{
    /**
     * Enum
     */
    // 상수를 정의할 때 쓰는 타입
    // JS
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
    const dayOfToday = DAYS_ENUM.MONDAY; // 0

    // TS
    enum Days {
        Monday, // 0
        Tuesday, // 1
        Wednesday, // 2
        Thursday, // 3
        Friday, // 4
        Saturday, // 5
        Sunday, // 6
    }
    console.log(Days.Monday);
    let day : Days = Days.Saturday;
    day = Days.Thursday;
    // 지금은 되는데...?!
    // day = 10;
    // enum으로 값을 할당한 변수는 어떤 값으로도 다시 값을 할당할 수 있다는게 enum의 문제!! 그렇기 때문에 사용 지양!
    console.log(day);

    // enum 대체적으로 union으로 대체하여 쓸수 있다!
    type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
    let dayOfWeek : DaysOfWeek = 'Monday';
    dayOfWeek = 'Tuesday';
}