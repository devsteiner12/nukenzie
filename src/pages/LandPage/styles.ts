import styled from "styled-components";

export const StyledContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: var(--gray-1);
  display: flex;
`;

export const StyledContent = styled.section`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  gap: 30px;
  margin-top: 100px;

  @media screen and (min-width: 850px) {
    margin-top: 0;
    flex-direction: row;
  }
`;

export const StyledInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  h2 {
    font-size: var(--sz-title-1);
    font-weight: var(--font-weg-1);
    max-width: 347px;
    line-height: 48px;
  }

  p {
    font-size: var(--sz-text-2);
    font-weight: 400;
  }

  button {
    width: 241px;
  }
`;

export const StyledImg = styled.div`
  width: 70%;
  max-width: 500px;

  img {
    width: 100%;
    animation: animationImg infinite 4s ease-in-out;
  }

  @keyframes animationImg {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(-10%);
    }
  }
`;
