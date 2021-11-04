import React, { memo } from 'react'

import ANHotAlbum from './c-cpns/hot-album'
import ANTopAlbum from './c-cpns/top-album'
import { AblumWrapper } from './style'

export default memo(function ANAlbum() {
  return (
    <AblumWrapper className='wrap-v2'>
      <ANHotAlbum />
      <ANTopAlbum />
    </AblumWrapper>
  )
})
