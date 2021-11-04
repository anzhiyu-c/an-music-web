import React, { memo } from 'react'

import ANRadioCategory from './c-cpns/radio-category'
import ANRadioRecommend from './c-cpns/radio-recommend'
import ANRadioRanking from './c-cpns/radio-ranking'
import { DjRadioWrapper } from './style'

export default memo(function ANDjradio() {
  return (
    <DjRadioWrapper className='wrap-v2'>
      <ANRadioCategory />
      <ANRadioRecommend />
      <ANRadioRanking />
    </DjRadioWrapper>
  )
})
