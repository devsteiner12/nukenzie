import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { StyledButton } from "../../styles/components/buttons";
import { List } from "./List";
import { StyledOptions, StyledTransactions } from "./styles";

export const Transactions = () => {
  const { handleFilterTransactions, listTransactions } =
    useContext(TransactionsContext);

  const [typeButton, setTypeButton] = useState("Todas");

  useEffect(() => {
    setTypeButton("Todas");
  }, [listTransactions]);

  return (
    <StyledTransactions>
      <StyledOptions bntClicked={typeButton} className="header-list__container">
        <h3>Resumo financeiro</h3>

        <div className="btns__container">
          <StyledButton
            variant="secondary"
            data-type="Todas"
            onClick={() => {
              handleFilterTransactions("Todas");
              setTypeButton("Todas");
            }}
          >
            Todas
          </StyledButton>
          <StyledButton
            variant="secondary"
            data-type="Entrada"
            onClick={() => {
              handleFilterTransactions("Entrada");
              setTypeButton("Entrada");
            }}
          >
            Entradas
          </StyledButton>
          <StyledButton
            variant="secondary"
            data-type="Saída"
            onClick={() => {
              handleFilterTransactions("Saída");
              setTypeButton("Saída");
            }}
          >
            Despesas
          </StyledButton>
        </div>
      </StyledOptions>

      <List />
    </StyledTransactions>
  );
};
