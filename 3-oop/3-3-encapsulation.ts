// encapsulation, 캡슐화는 클래스를 만들때

// “외부에서 접근될수 있는것은 무엇인지?”,

// “내부에서만 접근해야하는것은 무엇인지?”

// 를 결정한다(접근권한 관점).

// 사용자의 잘못된 접근을 막기위해서 꼭 클래스를 디자인할때 꼭 캡슐화를 고려해야한다.
namespace encapsulations {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value of beans should be bigger than 0!");
      }
      this.coffeeBeans += beans;
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

  const maker1 = CoffeeMaker.makeMachine(30);
  maker1.fillCoffeeBeans(30);

  //   ```
  // maker1.coffeeBeans=-2  => invalid
  // CoffeeMaker.BEANS_GRAM_PER_SHOT= -6  => invalid
  //   ```
  //  위와같이 커피양을 사용자의 잘못된 입력으로부터 방지해야한다.
  //  즉 외부에서 마음대로 지정해서는 안되는 속성을 캡슐화(은닉) 시켜줄 필요가 있다.
  //  public , private , proteted와 같은 옵션을 이용해 접근권한(은닉)을 설정할 수 있다.
  //  -  public : default 공개설정
  //  -  private: 외부에서 접근 불가, 클래스 내부에서만 접근가능
  //  -  protected: 외부에서 접근 불가, 상속을한 자식클래스에서 내부에서만 접근 가능
  //
  //
  //   아래와같이 노출되어서는 안되는 멤버변수들은 private를 이용해 은닉 시켜준다.
  //   ```
  //   private static BEANS_GRAM_PER_SHOT: number = 7;
  //     private coffeeBeans: number;
  //   ```
  //
  //
  //  커피콩을 채워야하는 경우가 있기떄문에 ,잘못된 입력을 방지할수 있게 설정되어있는 함수를 제공해준다
  //  ```
  //  fillCoffeeBeabs(beans: number) {
  //     if (beans < 0) {
  //       throw new Error("value of beans should be bigger than 0!");
  //     }
  //     this.coffeeBeans += beans;
  //   }
  //   ```
  //
  //
  //   아래와 같이  makeMachine함수를 통해 오브젝트를 생성하는 함수를 의도적으로
  //  클래스레벨에서 제공하는경우는 new키워드를 통해 object생성을 막기위한 경우이다.
  //
  //   ```
  //   static makeMachine(coffeeBeans: number): CoffeeMaker {
  //     return new CoffeeMaker(coffeeBeans);
  //   }
  //   ```
  //
  //
  //    new를통해 인스턴스를 생성하는 것을 방지하려면 private을 적용하면 된다
  //   ```
  //   private constructor(coffeeBeans: number) {
  // this.coffeeBeans = coffeeBeans;
  //   }
  //   ```
  //
  //
  //    new를통해 인스턴스를 생성할수 없다는것을 알게된 사용자는,
  //    클래스레벨의 생성자함수를 예측해 볼 수있다.
  //   ```
  //   const maker1 = CoffeeMaker.makeMachine(30)
  //   ```
}
