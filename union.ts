let score: number | string = 33;

score = 44;
score = "678";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let nafiUser: User | Admin = {
  name: "hanafi",
  id: 123,
};

nafiUser = {
  username: "hanaf",
  id: 123,
};

function getDB(id: number | string) {
  if (typeof id == "number") {
    console.log(id + 3);
  }

  if (typeof id == "string") {
    console.log("string");
  }
}

getDB(1);
getDB("ahgdawgk");

//array

const data: (string | number)[] = [1, "22", 123, 314, "90"];

export {};
