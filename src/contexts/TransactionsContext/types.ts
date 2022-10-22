export interface iTransaction {
  id?: number;
  description: string;
  type: string;
  value: string;
}

export interface iTransactionContext {
  handleAddTransaction: ({ description, type, value }: iTransaction) => void;
  handleRmvTransaction: (selectedTransaction: iTransaction) => void;
  handleFilterTransactions: (selectedType: string) => void;
  renderTransactions: iTransaction[];
  listTransactions: iTransaction[];
}

export interface iTransactionsProviderProps {
  children: React.ReactNode;
}
