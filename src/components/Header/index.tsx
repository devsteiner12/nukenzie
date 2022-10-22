import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { StyledButton } from "../../styles/components/buttons";
import { StyledContainer } from "../../styles/global";
import { StyledHeader } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledContainer className="container">
        <Link to="/">
          <img src={logo} alt="Logo NuKenzie" />
        </Link>
        <StyledButton variant="secondary" onClick={() => navigate("/")}>
          Inicio
        </StyledButton>
      </StyledContainer>
    </StyledHeader>
  );
};
