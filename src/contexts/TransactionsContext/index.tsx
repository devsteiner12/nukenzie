import { createContext, useState } from "react";
import {
  iTransaction,
  iTransactionContext,
  iTransactionsProviderProps,
} from "./types";
import { Global } from "../../utils/global";

export const TransactionsContext = createContext({} as iTransactionContext);

export const TransactionsProvider = ({
  children,
}: iTransactionsProviderProps) => {
  const [listTransactions, setListTransactions] = useState<iTransaction[] | []>(
    []
  );
  const [renderTransactions, setRenderTransactions] = useState<
    iTransaction[] | []
  >([]);

  const handleAddTransaction = (data: iTransaction): void => {
    const newTransactions = Global.handleGeneratorIds([
      ...listTransactions,
      data,
    ]);
    setListTransactions(newTransactions);
    setRenderTransactions(newTransactions);
  };

  const handleRmvTransaction = (selectedTransaction: iTransaction): void => {
    const newTransactions = listTransactions.filter(
      ({ id }) => id != selectedTransaction.id
    );
    setListTransactions(newTransactions);
    setRenderTransactions(newTransactions);
  };

  const handleFilterTransactions = (selectedType: string): void => {
    if (selectedType == "Todas") {
      setRenderTransactions(listTransactions);
    } else {
      const listFiltered = listTransactions.filter(
        ({ type }) => type == selectedType
      );
      setRenderTransactions(listFiltered);
    }
  };

  return (
    <TransactionsContext.Provider
      value={{
        handleAddTransaction,
        handleRmvTransaction,
        handleFilterTransactions,
        renderTransactions,
        listTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
