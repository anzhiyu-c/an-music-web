import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { changePlayListAction } from '../../../store/actionCreators'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

export default memo(function ANPlayHeader() {
  const { playList, currentSong } = useSelector(
    state => ({
      playList: state.getIn(['player', 'playList']),
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  // handle hooks
  const removeplayList = e => {
    dispatch(changePlayListAction([]))
  }

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className='operator'>
          <button>
            <i className='sprite_playlist icon favor'></i>
            收藏全部
          </button>
          <button onClick={e => removeplayList(e)}>
            <i className='sprite_playlist icon remove'></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>{currentSong.name}</HeaderRight>
    </HeaderWrapper>
  )
})
