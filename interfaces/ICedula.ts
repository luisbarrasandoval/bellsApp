interface ICedula {
  id: number;
  names: string;
  lastNames: string;
  nationality: string;
  sex: "M" | "F";
  create_date: string;
  expiration_date: string;
  run: string;
  document: string
}

export default ICedula;
