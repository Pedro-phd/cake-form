import { styled } from 'styled-components'

export const Container = styled.label`
  padding: 12px;
  border: 1px solid #a48445;
  border-radius: 4px;
  display: flex;
  align-items: center;
  min-height: 50px;
  justify-content: space-between;
`

export const Input = styled.input`
  border: 0;
  outline: none;
  &::placeholder {
    color: #7593c2;
  }
`

export const Label = styled.p`
  font-size: 16px;
  color: #24457b;
  font-family: 'inter', sans-serif;
  margin-bottom: 8px;
  .req {
    color: red;
  }
`

export const Hint = styled.span`
  position:absolute;
  font-size: 12px;
  color: gray;
`
export const Error = styled.span`
  position:absolute;
  font-size: 12px;
  color: red;
`