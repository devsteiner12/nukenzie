import { FormEvent, useContext, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { TotalMoney } from "./TotalMoney";
import { StyledButton } from "../../styles/components/buttons";
import { StyledDescription, StyledForm, StyledValueType } from "./styles";

export const Form = () => {
  const { handleAddTransaction } = useContext(TransactionsContext);

  const [inputDescription, setInputDescription] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("Entrada");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (inputDescription.trim() != "") {
      const data = {
        description: inputDescription,
        type: inputType,
        value: inputValue,
      };
      handleAddTransaction(data);
    }

    setInputValue("");
    setInputDescription("");
  };

  return (
    <section>
      <StyledForm onSubmit={handleSubmit}>
        <StyledDescription>
          <label htmlFor="description">Descrição</label>
          <input
            onChange={(e) => setInputDescription(e.target.value)}
            value={inputDescription}
            type="text"
            name="description"
            id="description"
            placeholder="Digite aqui sua descrição"
          />
          <span className="description__msg">Ex: Compra de roupas</span>
        </StyledDescription>
        <StyledValueType>
          <div className="value__container">
            <span>R$</span>
            <label htmlFor="value">Valor</label>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type="number"
              name="value"
              id="value"
              required
            />
          </div>
          <div>
            <label htmlFor="type">Tipo de valor</label>
            <select
              onChange={(e) => setInputType(e.target.value)}
              name="type"
              id="type"
              value={inputType}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
        </StyledValueType>

        <StyledButton variant="primary" type="submit">
          Inserir valor
        </StyledButton>
      </StyledForm>

      <TotalMoney />
    </section>
  );
};
