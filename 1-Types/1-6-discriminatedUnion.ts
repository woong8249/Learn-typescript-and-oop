// 한정시킨 유니언타입에 구별을위한 공통에 값을 부여해
// 타입 체크 가능함
{
  type SuccessState = {
    result: true;
    response: {
      body: string;
    };
  };
  type FailState = {
    result: false;
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    // code ...
    // code ...
    // if(성공했다면 ...)
    return {
      result: true,
      response: {
        body: "code",
      },
    };
  }

  //   타입을 구별하는 방법 2 => 구별할수 있는 공통의키를 애초에 부여한다
  function printLoginState(state: LoginState) {
    if (state.result) console.log("login", state.response.body);
    else console.log("not login", state.reason);
  }
}
