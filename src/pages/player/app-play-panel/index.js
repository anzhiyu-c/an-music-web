import React, { memo } from 'react'

import ANPlayHeader from './c-cpns/play-header'
import ANPlayList from './c-cpns/play-list'
import ANLyricPanel from './c-cpns/lyric-panel'
import { PanelWrapper } from './style'

export default memo(function ANAppPlayList() {
  return (
    <PanelWrapper>
      <ANPlayHeader />
      <div className='main'>
        <ANPlayList />
        <ANLyricPanel />
      </div>
    </PanelWrapper>
  )
})
