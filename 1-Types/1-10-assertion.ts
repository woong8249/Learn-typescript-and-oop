// Type Aseertions
// 자바스크립트와 연동되어  불가피하게 써야하는 경우가 있을수있지만
//  되도록이면 피하는게 더 좋다

{
  //    예시:
  // js이기때문에 any타입을 반환
  function jsSomeFunc(): any {
    return "hello";
  }
  const result = jsSomeFunc();
  //   아래처럼 as string을 이용하면 string처럼 사용할 수 있다
  //   이말은 확신한다는 의미고 확신이 실수로 이어지면
  //  예상하기 힘든 문제가 일어난다
  //  가령 jsSomFunc()가 숫자를 리턴한다면 앱이 깨지지는 않지만 undefined가 나올거다
  console.log(result.length);
  console.log((result as string).length);
  console.log((<string>result).length);

  //  심지어 앱이 죽는경우도 일어날 수 있다
  //  노드를 실행시키면 TypeError: wrong.push is not a function
  // 에러를 뿜으며 꺠질거다
  const wrong: any = 5;
  console.log((wrong as number[]).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers?.push(); //있다면?
  numbers!.push(2); // 있다고!!
}
