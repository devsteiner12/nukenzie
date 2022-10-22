import { useContext } from "react";
import { iTransaction } from "../../../../contexts/TransactionsContext/types";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { StyledButton } from "../../../../styles/components/buttons";
import { StyledCard, StyledDescription, StyledValue } from "./styles";
import { Global } from "../../../../utils/global";

interface iCardProps {
  transaction: iTransaction;
}

export const Card = ({ transaction }: iCardProps) => {
  const { handleRmvTransaction } = useContext(TransactionsContext);
  const { description, type } = transaction;
  const valueFormatted = Global.handleValueFormat(transaction);

  return (
    <StyledCard type={type}>
      <StyledDescription>
        <h2>{description}</h2>
        <span>{type}</span>
      </StyledDescription>
      <StyledValue>
        <span>{valueFormatted}</span>
        <StyledButton
          variant="secondary"
          onClick={() => handleRmvTransaction(transaction)}
        ></StyledButton>
      </StyledValue>
    </StyledCard>
  );
};
