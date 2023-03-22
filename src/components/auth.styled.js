import styled from 'styled-components';
import { Container, device } from '../globalStyles';

// Page Container
const StyedContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 400px;
  padding-top: 3rem;
  background-color: #fff;
  @media screen and (${device.md}) {
    width: 60%;
  }
`;

// AuthInputContainer
const StyledAuthInputContainer = styled.div`
  width: 100%;
  margin-top: 1.8rem;
  @media screen and (${device.sm}) {
    width: 60%;
  }
`;

// LinkContainer
const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  @media screen and (${device.sm}) {
    width: 60%;
  }
`;

// LinkText
const StyledLinkText = styled.div`
  margin: 0 0.75rem;
  text-decoration: underline;
  text-underline-offset: 3px;
  color: var(--color-primary);
  font-size: var(--fs-basic);
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

export {
  StyedContainer as AuthContainer,
  StyledAuthInputContainer as AuthInputContainer,
  StyledLinkText as AuthLinkText,
  StyledLinkContainer as AuthLinkContainer,
};
