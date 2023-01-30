// union => OR
// 케이스를 한정시키고 싶을떄
{
  type Direction = "left" | "rignt" | "up" | "down";
  function move(dir: Direction) {
    console.log(dir);
  }
  move("left");
  move("rignt");
  move("up");

  //   function : login => success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    // code ...
    // code ...
    // if(성공했다면 ...)
    return {
      response: {
        body: "logged in!!",
      },
    };
  }

  //   타입을 구별하는 방법 1 =>  "keyName" in object 썩 좋지않음
  function printLoginState(state: LoginState) {
    if ("response" in state) console.log("login", state.response.body);
    else console.log("not login", state.reason);
  }
}
