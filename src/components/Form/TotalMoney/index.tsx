import { useContext } from "react";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import { StyledTotalMoney } from "./styles";

export const TotalMoney = () => {
  const { renderTransactions } = useContext(TransactionsContext);

  if (!renderTransactions.length) {
    return null;
  }

  const total = Number(
    renderTransactions.reduce((acc, cur) => {
      if (cur.type == "Saída") {
        return acc - +cur.value;
      }

      return acc + +cur.value;
    }, 0)
  ).toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumIntegerDigits: 1,
  });

  return (
    <StyledTotalMoney>
      <div className="money-total__container">
        <p>Valor total:</p>
        <p>{total}</p>
      </div>
      <span>O valor se refere ao saldo</span>
    </StyledTotalMoney>
  );
};
