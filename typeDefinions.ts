type User = {
  readonly _id: string; //readonly cannot modify
  name: string;
  email: string;
  isActive: boolean;
  creditCart?: number;
};

type cardNumber = {
  cardnumber: string;
};

type carName = {
  cardname: string;
};

type cardDate = cardNumber &
  carName & {
    cardcard: string;
  };
let myUser: User = {
  _id: "12345",
  name: "h",
  email: "g@hg.com",
  isActive: false,
};

export {};
