import styled from 'styled-components';
import clsx from 'clsx';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 4rem;
  padding: 0.125rem 0.625rem;
  border-bottom: 2px solid #657786;
  background-color: var(--color-gray-100);
  &:hover,
  focus {
    border-bottom: 2px solid var(--color-light-blue);
  }
  &.error {
    border-bottom: 2px solid var(--color-error);
  }
`;

const StyledLabel = styled.label`
  font-size: var(--fs-secondary);
  color: var(--color-gray-700);
`;

const StyledInput = styled.input`
  border: none;
  background-color: var(--color-gray-100);
  line-height: 1.6rem;
  font-size: var(--fs-basic);
  ::-webkit-input-placeholder {
    color: var(--color-gray-500);
  }
`;

const StyledInputCheckContainer = styled.div`
  position: relative;
  margin-top: 0.5rem;
  /* background-color: pink; */
`;
const StyledInputCount = styled.div`
  text-align: end;
  color: var(--color-gray-700);
`;
const StyledInputLimit = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  text-align: end;
  color: red;
`;

export default function AuthInput({
  type,
  label,
  placeholder,
  value,
  onChange,
  InputLength,
}) {
  return (
    <>
      <StyledContainer className={clsx('', { error: value.length > 50 })}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          type={type || 'text'}
          placeholder={placeholder}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      </StyledContainer>
      <StyledInputCheckContainer>
        {InputLength > 0 && (
          <StyledInputCount>{InputLength}/50</StyledInputCount>
        )}
        {InputLength > 50 && (
          <StyledInputLimit>字數超出上限！</StyledInputLimit>
        )}
      </StyledInputCheckContainer>
    </>
  );
}
