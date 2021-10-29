import styled from 'styled-components'

export const AppFooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;

  .link {
    a {
      color: #999;
    }

    .line {
      margin: 0 10px;
      color: #999;
    }
  }

  .copyright {
    span {
      margin-right: 15px;
    }
  }
`

export const FooterRight = styled.ul`
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;

    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${require('@/assets/img/sprite_footer_02.png').default});
      background-size: 110px 552px;
    }

    :nth-child(1) .link {
      background-position: -61px -456px;
    }
    :nth-child(2) .link {
      background-position: -60px -101px;
    }
    :nth-child(3) .link {
      background-position: 0 0;
    }
    :nth-child(4) .link {
      background-position: -60px -50px;
    }
    :nth-child(5) .link {
      background-position: 0px -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require('@/assets/img/sprite_footer_01.png').default});
      background-size: 180px 139px;
    }

    :nth-child(1) .title {
      width: 72px;
      background-position: 0 -108px;
    }
    :nth-child(2) .title {
      background-position: 2px -91px;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 0 0;
      margin-top: 6px;
    }
    :nth-child(4) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }
    :nth-child(5) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`
