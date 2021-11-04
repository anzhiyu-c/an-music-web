import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import ANThemeHeaderNormal from '@/components/theme-header-normal'
import ANAlphaList from './c-cpns/alpha-list'
import ANArtistItem from './c-cpns/artist-item'
import { ArtistListWrapper } from './style'

export default memo(function ANArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(
    state => ({
      currentType: state.getIn(['artist', 'currentType']),
      artistList: state.getIn(['artist', 'artistList']),
    }),
    shallowEqual
  )

  return (
    <ArtistListWrapper>
      <ANThemeHeaderNormal title={currentType.name} />
      <ANAlphaList />
      <div className='artist-list'>
        {artistList.map((item, index) => {
          return <ANArtistItem key={item.id} index={index} info={item} />
        })}
      </div>
    </ArtistListWrapper>
  )
})
