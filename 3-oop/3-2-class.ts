// 1. object를 이용해 커피머신 만들기(class)
//  -coffeeBeans
// - makeCoffee()
// 2. class를이용해 인스턴스 만들기
// 3. 인스턴스를 이용해 커피 만들기

namespace class_ts {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  class CoffeeMaker {
    // 멤버변수
    // 고정값이기 때문에 static을 이용해 class level로 만든다
    // 인스턴스를 만들때마다 데이터가 추가되기때문에 메모리 낭비이다
    static BEANS_GRAM_PER_SHOT: number = 7; //class level

    coffeeBeans: number; //intance(obj) level

    // new키워드를통해 인스턴스를 만들때 초기화및 할당을 진행함
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker1 = new CoffeeMaker(32);
  console.log(maker1);
  const maker2 = new CoffeeMaker(16);
  console.log(maker2);
  const maker3 = CoffeeMaker.makeMachine(14);
  console.log(maker3);
  const coffee1 = maker1.makeCoffee(1);
  const coffee2 = maker2.makeCoffee(1);
  const coffee3 = maker3.makeCoffee(2);
  console.log("coffee1:", coffee1);
  console.log("coffee2:", coffee2);
  console.log("coffee3:", coffee3);
}

// 클래스는 관련된 속성과 함수들을 묶어서 어떤 모양의 데이터가 될거라는것을 정의하는 것이다
//  정의된 클래스에 데이터를 주입해인스턴스를 만들수 있다
//  인스턴스마다 변할수 있는 속성이 있다면 멤버 변수로
//  고정된 속성이라면 static을 이용해 class레벨로 공유한다
//  함수에 static을 이용해 클래스레벨이서 함수를 이용할 수 있다.
//  이떄 어떤 레벨에 함수를 둘지는 맥락적으로 생각해보아야한다.
//  만약 새로운 new키워드를 통해 새로운 인스턴스를 만드는 것이 아닌
// 아래와 같은 static레벨의 메서드를 이용해 인스턴스를 만드는 함수의 경우
//  맥락상 클래스 레벨에 있는게 맞다.
// 만들어진 커피머신에서 다시 커피머신을 만드는 기능은 맥락상 맞지않기 떄문이다.
// static makeMachine(coffeeBeans: number): CoffeeMaker {
// return new CoffeeMaker(coffeeBeans);
// }
// 또  위를통해 꼭 new를통한 constructor를 이용해야만  instance를 만들수 있는것이 아니라는것도 알 수 있다
//  js에서 static을 이용하는 예시로 Math.abs 같은 경우를 생각해볼수있다
//  abs를 사용하는경우 새 인스턴스를 만들지 않고도 접근할 수 있는데 이는
//  클래스래벨로 메소드가 정의되어 있기 때문이다.
