// {
//   // JavaScript
//   function jsAdd(num1, num2) {
//     return num1 + num2;
//   }

//   // TypeScript
//   function tsAdd(num1: number, num2: number): number {
//     return num1 + num2;
//   }
// }
// {
//   // JavaScript
//   function jsFetchNum(id) {
//     // code...
//     // code...
//     return new Promise((res, rej) => {
//       res(100);
//     });
//   }
//   // TypeScript
//   function TsFetchNUm(id: string): Promise<number> {
//     // code ...
//     // code ...
//     return new Promise((res, rej) => {
//       res(100);
//     });
//   }
// }

{
  // Optional parameter  => '?'
  function printName(first: string, last?: string): void {
    console.log(first);
    console.log(last);
  }
  printName("hwang", "jiwoong");
  printName("hwang");
  printName("hwang", undefined);
}

{
  // default parameter
  function printMessage(msg: string = "default msg") {
    console.log(msg);
  }
  printMessage();
}

{
  // Rest parameter
  function addNumbers(...array: number[]): void {
    console.log(array.reduce((a, b) => a + b));
  }
  addNumbers(1, 2, 3, 4, 5);
  addNumbers(1, 2, 3, 4, 5, 6, 7);
}
