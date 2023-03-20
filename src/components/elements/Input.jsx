import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 4rem;
  padding: 2px 10px;
  border-bottom: 2px solid #657786;
  background-color: #f5f8fa;
`;

const StyledLabel = styled.label`
  font-size: var(--fs-secondary);
  color: var(--color-gray-700);
`;

const StyledInput = styled.input`
  border: none;
  background-color: #f5f8fa;
  line-height: 1.6rem;
  font-size: var(--fs-basic);
  ::-webkit-input-placeholder {
    color: var(--color-gray-500);
  }
`;

export default function AuthInput({ type, label, placeholder }) {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type || 'text'} placeholder={placeholder} />
    </StyledContainer>
  );
}
