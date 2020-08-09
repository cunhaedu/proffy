import styled from 'styled-components';

export const TextAreaBlock = styled.div`
position: relative;

> label {
  font-size: 1.4rem;
  color: var(--color-text-in-primary);

}

> textarea {
  width: 90%;
  height: 16rem;
  min-height: 8rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  resize: vertical;
  padding: 1.2rem 1.6rem;
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
  bottom: 7px;
}
`;