import styled from 'styled-components';

export const GridContainer = styled.div`
  margin-top: 0px;
  padding:0 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  overflow-y: auto;
  overflow-x: hidden;
`;