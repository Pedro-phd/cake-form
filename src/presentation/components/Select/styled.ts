import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
  border: 1px solid #a48445;
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  position: relative;
`

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: transparent;

`

export const Items = styled.div`

  position: absolute;
  width: 50%;
  border-radius: 4px;
  height: fit-content;
  max-height: 230px;
  overflow-y: auto;
  right: 0;
  bottom: 10px;
  background-color: white;
  border: 2px solid gray;
  z-index: 1;
  box-shadow: 6px 7px 93px 2px rgba(0,0,0,0.21);

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4;
  }

  li {
    list-style: none;
    padding: 12px;
    &:hover {
      background-color: #f3f3f3;
    }
    &:focus {
      background-color: lightgray;
    }
    border-top: 1px solid lightgray;
    cursor: pointer;
  }
`
export const Placeholder = styled.p`
  font-size: 12px;
  color: #7593c2;
`