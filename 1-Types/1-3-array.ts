// 1. Array
{
  const numbers: number[] = [1, 2, 3];
  const nums: Array<number> = [1, 2, 3];
  function printArray(items: readonly number[]) {
    // items.push(5)  readonly인경우 파라미터 수정불가
    // readonly인경우 number[]와같은 튜플 형식만 가능
    console.log(items);
  }
}

// 2. Tuple
// 고정된 사이즈에 타입을 부여할 떄 사용
// 일반적인 경우 사용권장하지 않음
// 인덱스로 접근하는것은 가독성이 떨어짐
// interface, type, alias, class 를 이용하는게 더 좋음
// react의 useState에서나 사용됨
{
  let student: [string, number];
  student = ["jiwoong", 28];
  student[0]; //"jiwoong"
  student[1]; // 1
  const [name, age] = student;
}
