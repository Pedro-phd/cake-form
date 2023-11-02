import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Row = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  align-items: end;
  @media screen and (max-width: 724px){
    grid-template-columns: 1fr;
  }

`
