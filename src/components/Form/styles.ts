import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 363px;
  min-width: 330px;
  padding: 38px 26px;
  border: 2px solid var(--gray-3);
  border-radius: var(--radius-1);

  input,
  select {
    margin: 12px 0 6px;
    background-color: var(--gray-4);
    border: none;
    outline: none;
    padding: 13px 16px;
    border-radius: var(--radius-1);
    width: 100%;
    box-sizing: border-box;
  }

  input[type="number"]::-webkit-inner-spin-button {
    appearance: none;
  }

  input::placeholder {
    font-size: var(--sz-text-2);
  }

  button {
    margin-top: 20px;
    width: 100%;
  }
`;

export const StyledDescription = styled.div`
  label,
  span {
    display: block;
  }

  .description__msg {
    font-size: var(--sz-text-3);
    font-weight: 400;
    color: var(--gray-2);
  }
`;

export const StyledValueType = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 18px;

  .value__container {
    position: relative;
    width: 128px;

    span {
      position: absolute;
      top: 41px;
      right: 16px;
    }
  }
`;
