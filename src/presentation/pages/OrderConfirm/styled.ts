import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px;
  a {
    text-decoration: none;
  }
  h1 {
    color: #68bd00;
  }
  p {
    font-size: 16px;
    text-align: center;
    margin-top: 16px;
  }

  h3 {
    font-size: 24px;
    margin-top: 16px;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: #68bd00;
    border: none;
    font-size: 24px;
    padding: 16px 32px;
    width: fit-content;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    border-radius: 8px;
    margin: 0 auto;
    cursor: pointer;
  }

`

export const Header = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 0 auto;
`