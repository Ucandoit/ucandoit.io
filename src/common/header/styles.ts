import styled, { css } from 'styled-components';
import Logo from './Logo';

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    position: fixed;
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid ${theme.colors.text}50;
    background-color: ${theme.colors.background};
    z-index: 1;

    @media (min-width: 768px) {
      height: 4rem;
    }
  `}
`;
export const StyledNav = styled.nav`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: ${theme.layout.maxWidth};

    @media (min-width: 768px) {
      padding: 0 30px;
    }

    & > button {
      padding: 0;
      cursor: pointer;

      // hide menu button on large screen
      @media (min-width: 768px) {
        display: none;
      }
    }

    .iconfont {
      color: ${theme.colors.primary};
      font-size: 2rem;
      padding: ${theme.spacing.xs};
    }
  `}
`;

export const StyledLogo = styled(Logo)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 2rem;
    position: relative;
    left: -1.5rem;
    margin: 0 auto;

    @media (min-width: 768px) {
      left: 0;
      margin: 0 30px 0 0;
    }
  `}
`;
