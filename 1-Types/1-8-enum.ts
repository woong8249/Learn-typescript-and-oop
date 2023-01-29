// enum
// 관련된 상수값들을 한 곳에 모아 정의하는 타입
// js에는 없는 타입
{
  // JS
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAT: 1, WEDNESDAY: 2 });
  const dayOfTpday = DAYS_ENUM.MONDAY;

  // TS
  enum Days {
    Monday,
    Tuesday,
    Wendesday,
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }
  //   값을 정하지 않으면 처음이 0부터 1씩 상승하며 할당
  //   값을 정하면 그값을 기준으로 1씩 상승하며 할당
  //   값을 문자열로 할당하면 각각 모두 할당 해주어야 한다
  console.log(Days.Monday);
  console.log(Days.Tuesday);
  //   타입스크립트에서 enum은 충분히 대체될 수 있다( union타입)
  //   뿐만아니라 enum에서 정의한 상수외의 다른값도 정의할수있다
  //   이는 타입의 보장이 없다는 말이고 예기치 못한 에러를 야기할수 있어
  //   사용하지 않는것을 추천한다
  //   하지만 다른프로그램에서 union타입을 쓰지 못하는경우
  //   어쩔수없이 enum을 쓰긴 해야한다

  let day = Days.Thursday;
  day = 10;
  console.log(day);
}
