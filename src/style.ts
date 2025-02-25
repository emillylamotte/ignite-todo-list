import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.gray700};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 20;
  img {
    width: 180px;
    height: 50;
  }
`;

export const Home = styled.div`
  width: 875px;
  height: 100%;
  pading: 0px;
  margin: 0px;
`;
