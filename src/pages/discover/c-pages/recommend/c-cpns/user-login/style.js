import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  height: 126px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-position: 0 0;
  .note {
    width: 205px;
    margin: 0 auto;
    padding: 10px 0;
    line-height: 22px;
  }
  .btn {
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    cursor: pointer;
    background-position: 0 -195px;
    text-indent: -99999;

    &:hover {
      background-position: -110px -195px;
    }
  }
`
