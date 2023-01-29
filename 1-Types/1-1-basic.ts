/**
모듈로 만들지않고 파일을 작성하는경우
글로벌 스코프로 적용되기 떄문에 파일이 많아지는경우
충돌을 야기할 수 있다. => 우선은 {}를 이용해 로컬 스코프로 만들자

JavaScript 
 - Primitive: number, string, boolean, bigint, symbol, null, undefined
 - object: function, array ....
 */

//  TypeScript
{
  // 1. number
  const num: number = 0;

  // 2. string
  const str: string = "hello";

  // 3. boolean
  const boal: boolean = true;

  // 4. undefined
  let name: undefined; //bad type set
  let age: number | undefined;
  age = undefined;
  age = 1;

  //  5. null
  let book: null; //bad type set
  let person: string | null;
  person = null;
  person = "jiwoong";

  //  6. unknown  => bad type set
  let notSure: unknown = 0;
  notSure = 1;
  notSure = true;
  notSure = "anything";

  //  7. any => bad type set
  let anything: any = 0;
  anything = "hello";
  anything = "hellodsd";

  //   8. void
  //  함수가 리턴하는 타입 명시할때 사용, 텅텅빈, 생략가능
  function print(): void {
    console.log("hello");
  }
  let unusable: void = undefined; // bad type set, 보통 변수에는 사용하지 않음

  //   9. never
  // 함수가 에러를 던지거나 종료되지 않는경우 사용
  function throwError(message: string): never {
    // message => server (log)
    throw new Error(message);
  }

  function noEnd(): never {
    while (true) {}
  }
  let notuse: never; // bad type set, 보통 변수에는 사용하지 않음

  //   10. object => bad type set
  //   원시타입을 제외한 어떤 참조타입든 담을 수 있다
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "jiwoong" });
  acceptSomeObject({ name: "jihyae" });
  acceptSomeObject([1, 2, 3]);
}
