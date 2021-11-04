import React, { memo } from 'react'

import ANArtistCategory from './c-cpns/artist-category'
import ANArtistList from './c-cpns/artist-list'
import { ANArtistWrapper } from './style'

export default memo(function ANArtist() {
  return (
    <ANArtistWrapper>
      <div className='content wrap-v2'>
        <ANArtistCategory />
        <ANArtistList />
      </div>
    </ANArtistWrapper>
  )
})
