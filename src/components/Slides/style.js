import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

export const Item = styled.div`
  flex-shrink: 0;
  width: 80%;
  margin: 0 10%;
  padding: 10rem 0;
  background-color: palegoldenrod;
  border-radius: 4px;
  text-align: center;
`;

export const Navi = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonRP = styled.button``;
