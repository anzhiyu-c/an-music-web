import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper, DownloadLink } from './style'

export default memo(function ANTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector(
    state => ({
      topBanners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // 其他的hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  const beforeChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 其他的业务逻辑
  const bgImage =
    topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel effect='fade' autoplay ref={bannerRef} beforeChange={beforeChange}>
            {topBanners.map((item, index) => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img className='image' src={item.imageUrl} alt={item.typeTitle}></img>
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <DownloadLink />
          <p className='text-description'>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
          <button className='btn right' onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
