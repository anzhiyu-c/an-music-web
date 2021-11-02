import styled from 'styled-components'

export const HotRadioWrapper = styled.div`
  padding: 6px 20px;
  .radio-item {
    width: 210px;
    height: 50px;
    overflow: hidden;
    background: #fafafa;
    text-indent: -9999;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    &:hover {
      text-decoration: none;
    }
    .head-img {
      width: 40px;
      height: 40px;
    }
    .info {
      width: 160px;
      line-height: 21px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        font-size: 12px;
        &:hover {
          text-decoration: underline;
        }
      }
      .description {
        cursor: pointer;
      }
    }
  }
`
