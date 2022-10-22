import styled from "styled-components";

export const StyledMain = styled.main`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    @media screen and (min-width: 890px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 30px;
    }
  }
`;
