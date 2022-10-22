import { useContext } from "react";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import { Card } from "./Card";
import noCard from "../../../assets/no-card.svg";
import { StyledList } from "./styles";

export const List = () => {
  const { renderTransactions } = useContext(TransactionsContext);

  return (
    <StyledList>
      {renderTransactions.length ? (
        renderTransactions.map((transaction: any) => {
          return <Card key={transaction.id} transaction={transaction} />;
        })
      ) : (
        <img src={noCard} alt="Lista de transações vazia" />
      )}
    </StyledList>
  );
};
