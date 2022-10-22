import styled from "styled-components";

export const StyledTotalMoney = styled.section`
  margin-top: 25px;
  padding: 20px 26px;
  border: 2px solid var(--gray-3);
  border-radius: var(--radius-1);

  span {
    display: block;
    margin-top: 23px;
    font-size: var(--sz-text-3);
  }

  .money-total__container {
    display: flex;
    justify-content: space-between;

    p {
      font-weight: 600;
      font-size: var(--sz-text-1);

      &:last-child {
        color: var(--color-primary);
      }
    }
  }
`;
