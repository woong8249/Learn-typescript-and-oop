{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network

  function printLoginState(resourceLoadState: ResourceLoadState): void {
    let result: string = "";
    if (resourceLoadState.state === "loading") {
      result = "👀 loading...";
    } else if (resourceLoadState.state === "success") {
      result = "😃 loaded";
    } else if (resourceLoadState.state === "fail") {
      result = "😱 no network";
    } else throw Error(`uknown state :${resourceLoadState}`);
    console.log(result);
  }
}
