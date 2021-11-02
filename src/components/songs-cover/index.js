import React, { memo } from 'react'

import { getCount, getSizeImage } from '@/utils/format-utils'
import { SOURCE_CARD } from '@/common/card-type.js'

import { SongsCoverWrapper } from './style'

export default memo(function ANSongsCover(props) {
  const { info, type } = props

  return (
    <SongsCoverWrapper>
      <div className='cover-top'>
        <img src={getSizeImage(info.picUrl, 140)} alt={info.name} />
        <div className='cover sprite_covor'>
          <div className='info sprite_covor'>
            <span>
              <i className='sprite_icon erji'></i>
              {getCount(info.playCount)}
            </span>
            <i className='sprite_icon play'></i>
          </div>
        </div>
      </div>
      <div className='cover-bottom'>{info.name}</div>
      {type === SOURCE_CARD ? (
        <div className='cover-source text-nowrap'>{'by' + info.creator.nickname}</div>
      ) : null}
    </SongsCoverWrapper>
  )
})
