import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px;
  form {
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
  }
`

export const Submit = styled.input`
  color: white;
  font-size: 24px;
  width: fit-content;
  padding: 8px 16px;
  background-color: #24457b;
  border: none;
  border-radius: 32px;
  margin: 0 auto;
  cursor: pointer;
`