import * as reverse from "lodash/reverse";
class Product {
  name: string;
  price: number;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
}

class ProductElectronico extends Product {
  apps: string[];
  constructor(name: string, price: number, usaBateria) {
    super(name, price);
    this.setUsaBateria(usaBateria);
  }
  usaBateria: boolean = false;

  setApps(apps: string[]) {
    this.apps = apps;
  }

  getAppsReverse() {
    return reverse(this.apps);
  }

  setUsaBateria(usa: boolean) {
    this.usaBateria = usa;
  }
}

function main() {
  const celular = new ProductElectronico("Android", 65000, true);
  celular.setApps(["Google", "Instagram", "Facebook"]);
  console.log(celular);
  console.log(celular.getAppsReverse());
  console.log("cambios");
}

main();
