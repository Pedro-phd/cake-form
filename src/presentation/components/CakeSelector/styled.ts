import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  grid-gap: 16px;
  label {
    display: flex;
    gap: 8px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 724px){
    grid-template-columns: 1fr;
  }
`