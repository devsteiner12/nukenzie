import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Transactions } from "../../components/Transactions";
import { StyledContainer } from "../../styles/global";
import { StyledMain } from "./styles";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledContainer className="container">
          <Form />
          <Transactions />
        </StyledContainer>
      </StyledMain>
    </>
  );
};
