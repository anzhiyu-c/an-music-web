import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotSingerAction } from '../../store/actionCreators'

import { HotSingerWrapper } from './style'
import HeardRcmRight from '../components/header-recommend-right'
export default memo(function ANHotSinger() {
  // redux hooks
  const { hotSinger = [] } = useSelector(
    state => ({
      hotSinger: state.getIn(['recommend', 'hotSinger']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getHotSingerAction(5))
  }, [dispatch])

  return (
    <HotSingerWrapper>
      <HeardRcmRight leftTitle='热门歌手' rightText='查看全部&gt;' />
      {hotSinger.map(item => {
        return (
          <a href='/todo' className='singer-item' key={item.id}>
            <img className='head-img' src={item.img1v1Url + '?param=62x62'} alt='' />
            <div className='info'>
              <h4 className='name'>{item.name}</h4>
              <div className='description'>{item.alias[0]}</div>
            </div>
          </a>
        )
      })}
      <a href='/todo' className='footerBtn sprite_button'>
        <div className='tip sprite_button'>申请成为网易人</div>
      </a>
    </HotSingerWrapper>
  )
})
