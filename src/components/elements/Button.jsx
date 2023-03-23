import styled from 'styled-components';
import { device } from '../../globalStyles';

const StyledAuthButton = styled.button`
  width: 100%;
  margin: 2rem 0;
  padding: 0.375rem 0;
  border: none;
  border-radius: 30px;
  color: #fff;
  background-color: var(--color-theme);
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
  @media screen and (${device.sm}) {
    width: 60%;
  }
`;

export default function AuthButton({ onClick }) {
  return <StyledAuthButton onClick={onClick}>登入</StyledAuthButton>;
}
