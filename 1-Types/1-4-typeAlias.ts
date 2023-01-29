// Type Alias

// 타입을 스스로 셋팅하고 셋팅한 방식대로만 할당할 수 있음
{
  type Text = string;
  const name: Text = "jiwoong";
  const address: Text = "korea";

  type Student = {
    name: string;
    age: number;
  };
  const student1: Student = {
    name: "jiwoong",
    age: 28,
  };
}

// Literal Types
{
  type Name = "name";
  let jiwoongName: Name = "name";
  type JSON = "json";
  let json: JSON = "json";
  type Number = 1;
  let number: Number = 1;
  type Boal = true;
}
