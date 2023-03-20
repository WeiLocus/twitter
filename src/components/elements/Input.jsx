import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 4rem;
  padding: 0.125rem 0.625rem;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 2px solid #657786;
    width: 100%;
    border-radius: 0 0 4px 4px;
  }
  background-color: var(--color-gray-100);
  &:hover::after,
  focus::after {
    border-bottom: 2px solid var(--color-light-blue);
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

const StyledInputCount = styled.div`
  text-align: end;
  color: var(--color-gray-700);
`;
const StyledInputLimit = styled.div`
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
      <StyledContainer>
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
      {InputLength > 0 && <StyledInputCount>{InputLength}/50</StyledInputCount>}
      {/* {InputLength >= 50 && <StyledInputLimit>字數超出上限！</StyledInputLimit>} */}
    </>
  );
}
