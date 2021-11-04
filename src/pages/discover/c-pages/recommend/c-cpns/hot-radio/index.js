import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotRadioAction } from '../../store/actionCreators'

import HeardRcmRight from '../components/header-recommend-right'
import { HotRadioWrapper } from './style'
export default memo(function ANHotRadio() {
  // redux hooks
  const { hotRadio = [] } = useSelector(
    state => ({
      hotRadio: state.getIn(['recommend', 'hotRadio']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getHotRadioAction())
  }, [dispatch])
  return (
    <HotRadioWrapper>
      <HeardRcmRight leftTitle='热门主播' rightText='查看全部&gt;' />

      {hotRadio.map(item => {
        return (
          <a href='/#' className='radio-item' key={item.id}>
            <img className='head-img' src={item.picUrl + '?param=40x40'} alt='' />
            <div className='info'>
              <h4 className='name text-nowrap'>{item.name}</h4>
              <div className='description text-nowrap'>{item.copywriter}</div>
            </div>
          </a>
        )
      })}
    </HotRadioWrapper>
  )
})
