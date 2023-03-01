interface User {
  nama: string;
  tempat: string;

  startTrial?(): string;
  getCupon?(id: string, trial: number): boolean;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "learn" | "new";
}

const newUser: User = {
  nama: "Hartono Mall",
  tempat: "jogja",
  githubToken: "github/12342",
  startTrial() {
    return "nice";
  },
  getCupon(id: "12312", trial: 1241) {
    return true;
  },
};

const newAdmin: Admin = {
  role: "admin",
  nama: "Hartono Mall",
  tempat: "jogja",
  githubToken: "github/12342",
};

export {};
