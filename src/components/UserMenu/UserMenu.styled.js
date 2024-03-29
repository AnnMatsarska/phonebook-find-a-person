import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-right: 15px;
  }
`;

export const UserText = styled.p`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    text-decoration: none;
    font-family: Helvetica Neue;
    color: var(--primary-color-violet);
    font-weight: 700;
    font-size: 20px;
    outline: none;
    padding: 8px 12px;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 15px;
  }
`;

export const UserName = styled.span`
  color: var(--primary-color-yellow);
`;
