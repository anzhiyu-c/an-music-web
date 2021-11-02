import React, { memo, useEffect } from 'react'

import { getTopListAction } from '../../store/actionCreators'

import ANThemeHeader from '../components/theme-header-recommend'
import ANTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export default memo(function ANRecommendRanking() {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(
    state => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // outer hooks
  useEffect(() => {
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ANThemeHeader title='榜单' />
      <div className='tops'>
        <ANTopRanking info={upRanking} />
        <ANTopRanking info={newRanking} />
        <ANTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
