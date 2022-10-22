import { iTransaction } from "../contexts/TransactionsContext/types";

export class Global {
  static handleValueFormat(transaction: iTransaction): string {
    const value = transaction.value;

    const valueFormatted = Number(value).toLocaleString("pt-BR", {
      currency: "BRL",
      style: "currency",
      minimumIntegerDigits: 1,
    });

    return valueFormatted;
  }

  static handleGeneratorIds(list: iTransaction[]): iTransaction[] {
    return list.map((item: iTransaction, index: number): iTransaction => {
      return {
        ...item,
        id: index,
      };
    });
  }
}
