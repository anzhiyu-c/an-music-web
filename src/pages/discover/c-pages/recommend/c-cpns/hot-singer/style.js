import styled from 'styled-components'

export const HotSingerWrapper = styled.div`
  padding: 6px 20px;
  .singer-item {
    width: 210px;
    height: 62px;
    overflow: hidden;
    background: #fafafa;
    text-indent: -9999;
    display: flex;
    justify-content: space-between;
    border: 1px solid #e9e9e9;
    margin-bottom: 15px;
    &:hover {
      text-decoration: none;
    }
    .head-img {
      width: 62px;
      height: 62px;
    }
    .info {
      width: 133px;
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        font-size: 14px;
        font-weight: bold;
      }
      .description {
        cursor: pointer;
      }
    }
  }
  .footerBtn {
    background-position: right -100px;
    margin-left: 20px;
    border-radius: 4px;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    padding: 0 5px 0 0;
    white-space: nowrap;
    &:hover {
      text-decoration: none;
      background-position: right -182px;
      color: #333;
    }
    .tip {
      background-position: 0 -59px;
      width: 170px;
      font-weight: bold;
      &:hover {
        color: #333;
        background-position: 0 -141px;
      }
    }
  }
`
