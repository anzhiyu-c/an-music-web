import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 285px;
    background-color: #322d2d;

    display: flex;
    position: relative;
  }

  .ant-carousel .slick-dots li.slick-active button {
    background: #ae0a0a;
    opacity: 1;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;
    .image {
      width: 100%;
      height: 100%;
      user-select: none;
    }
  }
`

export const BannerRight = styled.div`
  width: 254px;
  height: 285px;
  background: url(${require('@/assets/img/download.png').default});

  .text-description {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }
`

export const DownloadLink = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank',
})`
  display: block;
  width: 215px;
  height: 56px;
  text-indent: -9999px;
  margin: 186px 0px 0px 19px;
  background-position: 0px 9999px;
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png').default});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
