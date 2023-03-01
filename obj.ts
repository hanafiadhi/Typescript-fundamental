type User = {
  name: string;
  email: string;
  isActive: boolean;
};
type InputUser = {
  name: string;
  email: string;
};

let Users = {};

function creatUser(newUser: InputUser): User {
  Users = { name: newUser.name, email: newUser.email, isActive: false };
  return { name: newUser.name, email: newUser.email, isActive: false };
}

creatUser({
  name: "hanafi",
  email: "hanafi@gmail.com",
});

console.log(Users);

export {};
