import React, { useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { getCategory, getSongList, changeCurrentCategoryAction } from './store/actionCreators'

import ANSongsHeader from './c-cpns/songs-header'
import ANSongsList from './c-cpns/songs-list'
import { SongsWrapper } from './style'

export default memo(function ANSongs() {
  // redux
  const dispatch = useDispatch()
  const cat = useLocation().cat

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat))
  }, [dispatch, cat])

  // hooks
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getSongList(0))
  }, [dispatch])

  return (
    <SongsWrapper className='wrap-v2'>
      <ANSongsHeader />
      <ANSongsList />
    </SongsWrapper>
  )
})
