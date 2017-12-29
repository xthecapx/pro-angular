export class TempConverter {

  static convertFtoC(temp: number | string): string {  
    let value: number = (<number>temp).toPrecision ? <number>temp : parseFloat(<string>temp);

    return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
  }
}

export class TempConverter2 {
  
  static convertFtoC(temp: number | string): string {  
    let value: number = (temp as number).toPrecision ? temp as number : parseFloat(<string>temp);

    return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
  }
}

