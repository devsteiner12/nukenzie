import styled, { css } from "styled-components";

interface iStyledButtonProps {
  variant: "primary" | "secondary";
}

const buttonsType = {
  primary: css`
    background-color: var(--color-primary);
    color: white;
  `,
  secondary: css`
    background-color: var(--gray-3);
  `,
};

export const StyledButton = styled.button<iStyledButtonProps>`
  font-size: var(--sz-text-3);
  font-weight: 500;
  padding: 10px 15px;
  border-radius: var(--radius-1);
  border: none;
  cursor: pointer;

  ${({ variant }) => buttonsType[variant]}
`;
