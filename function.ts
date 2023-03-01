function addTwo(num: number): number {
  return num + 2;
}
addTwo(2);

function getName(nama: string): string {
  return nama.toUpperCase();
}
getName("hanafi");

function signUp(
  nama: string,
  email: string,
  password: string,
  isMerrid: boolean
) {}
signUp("hanafi", "hanafi@gmail.com", "password", false);
const login = (email: string, password: string) => {};

const getHello = (s: string): string => {
  return "";
};

const heroes = ["thor", "ironman", "thanos"];

heroes.map((hero: string): string => {
  return `hero is ${hero}`;
});

export {};
