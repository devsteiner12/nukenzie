import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-land.svg";
import img from "../../assets/illustration.svg";
import { StyledButton } from "../../styles/components/buttons";
import {
  StyledContainer,
  StyledContent,
  StyledImg,
  StyledInfo,
} from "./styles";

export const LandPage = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledContent>
        <StyledInfo>
          <img src={logo} alt="Logo NuKenzie" />

          <h2>Centralize o controle das suas finanças</h2>
          <p>de forma rápida e segura</p>
          <StyledButton
            variant="primary"
            onClick={() => navigate("/dashboard")}
          >
            Iniciar
          </StyledButton>
        </StyledInfo>
        <StyledImg>
          <img src={img} alt="Centralize todas as suas finanças na nuKenzie" />
        </StyledImg>
      </StyledContent>
    </StyledContainer>
  );
};
