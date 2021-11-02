import { memo } from 'react'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'

import ANTopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'
import UserLogin from './c-cpns/user-login'
import HotSinger from './c-cpns/hot-singer'
import HotRadio from './c-cpns/hot-radio'

function ANRecommend(props) {
  return (
    <RecommendWrapper>
      <ANTopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <HotSinger />
          <HotRadio />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(ANRecommend)
