namespace Withot_oop {
  //  1. 커피제조에 필요한 콩 전역변수로 설정/ 커피를 만들때마다 차감
  //  2. 커피를 만들어주는 함수 makeCoffee
  //  3. 함수에 전달되는 인자 정보
  //  - shot횟수 , - 우유첨가정보
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  const BEANS_GRAM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
  // 필요한 상수,데이터 모두 분산되어 있다
  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
