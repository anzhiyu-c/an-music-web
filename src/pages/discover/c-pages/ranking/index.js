import React, { useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'

import { getTops } from './store/actionCreators'

import ANTopRanking from './c-cpns/top-ranking'
import ANRankingHeader from './c-cpns/ranking-header'
import ANRankingList from './c-cpns/ranking-list'
import { RankingWrapper, RankingLeft, RankingRight } from './style'

export default memo(function ANRanking() {
  // redux
  const dispatch = useDispatch()

  // hooks
  useEffect(() => {
    dispatch(getTops())
  }, [dispatch])

  return (
    <RankingWrapper className='wrap-v2'>
      <RankingLeft>
        <ANTopRanking />
      </RankingLeft>
      <RankingRight>
        <ANRankingHeader />
        <ANRankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
