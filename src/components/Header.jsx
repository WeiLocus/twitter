import styled from 'styled-components';
import { ReactComponent as GoBackIcon } from '../assets/GoBack.svg';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-inline: 1px solid var(--color-gray-200);
  background-color: white;

  h1 {
    font-size: var(--fs-h4);
  }
`;
export default function Header({ headerText, goBack }) {
  return (
    <StyledHeader>
      {goBack && <GoBackIcon />}
      <h1>{headerText}</h1>
    </StyledHeader>
  );
}
