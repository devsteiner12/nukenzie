import styled, { css } from "styled-components";
interface iStyled {
  bntClicked: string;
}

export const StyledTransactions = styled.section`
  width: 100%;
  max-width: 600px;
`;

export const StyledOptions = styled.div<iStyled>`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  h3 {
    font-size: var(--sz-text-1);
    font-weight: 600;
  }

  .btns__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    button {
      width: 100%;
      max-width: 50%;

      ${({ bntClicked }: any) => {
        return css`
          &[data-type=${bntClicked}] {
            background-color: var(--color-primary);
            color: white;
          }
        `;
      }}
    }
  }

  @media screen and (min-width: 448px) {
    flex-direction: row;

    .btns__container {
      flex-direction: row;
      width: auto;
    }
  }
`;
