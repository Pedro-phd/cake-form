import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  align-items:end;
  @media screen and (max-width: 724px){
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  text-decoration:underline;
  font-size: 28;
  font-weight: 400;
`