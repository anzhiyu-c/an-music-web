import React, { memo, useRef, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'

import { scrollTo } from '@/utils/ui-helper'

import { PannelWrapper } from './style'

export default memo(function ANLyricPanel() {
  const { lyricList, currentLyricIndex } = useSelector(
    state => ({
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
    }),
    shallowEqual
  )

  // other hooks
  const panelRef = useRef()
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex])

  return (
    <PannelWrapper ref={panelRef}>
      <div className='lrc-content'>
        {lyricList.map((item, index) => {
          return (
            <div
              key={item.time}
              className={classNames('lrc-item', { active: index === currentLyricIndex })}
            >
              {item.content}
            </div>
          )
        })}
      </div>
    </PannelWrapper>
  )
})
