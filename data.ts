import ICedula from "./interfaces/ICedula";
import { faker } from "@faker-js/faker";
import {randomRun, randomDocument} from "./utils/randomRun.dev";

function getData(n: number): Array<ICedula> {
  let data: Array<ICedula> = [];
  for (let i = 0; i < n; i++) {
    data.push({
      id: randomDocument(),
      names: faker.name.firstName(),
      lastNames: faker.name.lastName(),
      nationality: faker.address.cityName(),
      sex: ((Math.random() * 2) | 0) === 0 ? "M" : "F",
      create_date: `${(Math.random() * 30) + 10 | 0}/${(Math.random() * 30) | 0}/${
        (Math.random() * 2022) | 0
      }`,
      expiration_date: `${(Math.random() * 12)  | 0}/${
        (Math.random() * 30) | 0
      }/${(Math.random() * 2022) | 0}`,
      run: randomRun(),
      document: randomDocument().toString(),
    });

  }

  return data;
}

export { getData };
