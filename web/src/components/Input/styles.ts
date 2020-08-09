import styled from 'styled-components';

export const InputBlock = styled.div`
position: relative;

> label {
  font-size: 1.4rem;
  color: var(--color-text-in-primary);

}

> input {
  width: 90%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font-size: 1.6rem;
  font-family: Archivo;
}

&:focus-within::after {
  width: calc(90% - 3.2rem);
  height: 2px;
  content: '';
  background: var(--color-primary-light);
  position: absolute;
  left: 1.6rem;
  right: 1.6rem;
  bottom: 0;
}
`;
