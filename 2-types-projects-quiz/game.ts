{
  /**
   * Let's make a game 🕹
   */
  type Position = { x: number; y: number };
  type Action = "up" | "down" | "left" | "right";
  let position: Position = { x: 0, y: 0 };
  function move(action: Action): void {
    switch (action) {
      case "up":
        position.y += 1;
        break;
      case "down":
        position.y -= 1;
        break;
      case "left":
        position.x -= 1;
        break;
      case "right":
        position.x += 1;
        break;
      default:
        throw Error("unknow action");
    }
  }
  console.log(1, position); // { x: 0, y: 0}
  move("up");
  console.log(2, position); // { x: 0, y: 1}
  move("down");
  console.log(3, position); // { x: 0, y: 0}
  move("left");
  console.log(4, position); // { x: -1, y: 0}
  move("right");
  console.log(5, position); // { x: 0, y: 0}
}
