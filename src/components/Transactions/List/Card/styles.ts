import styled, { css } from "styled-components";
import trash from "../../../../assets/trash.svg";

interface iStyledCardProps {
  type: string;
}

export const StyledCard = styled.li<iStyledCardProps>`
  display: flex;
  justify-content: space-between;
  padding: 12px 12px 28px 18px;
  background-color: var(--gray-4);
  border-radius: var(--radius-2);
  margin-bottom: 37px;

  border-left: 4px solid
    var(
      ${({ type }) => {
        switch (type) {
          case "Saída":
            return css`--gray-3`;

          case "Entrada":
            return css`--color-secondary`;
        }
      }}
    );
`;

export const StyledDescription = styled.div`
  h2 {
    font-size: var(--sz-title-2);
    font-weight: 600;
    margin-bottom: 20px;
  }

  span {
    font-size: var(--sz-text-3);
    font-weight: 400;
    color: var(--gray-2);
  }
`;

export const StyledValue = styled.div`
  span {
    margin-right: 50px;
  }

  button {
    background-image: url(${trash});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 17px;
    width: 35px;
    height: 35px;
  }
`;
