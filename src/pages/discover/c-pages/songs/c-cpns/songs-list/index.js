import React, { useState, memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { PER_PAGE_NUMBER } from '../../store/constants'
import { getSongList } from '../../store/actionCreators'

import ANThemeCover from '@/components/theme-cover'
import ANPagination from '@/components/pagination'
import { SongListWrapper } from './style'

export default memo(function ANSongsList() {
  // hooks
  const [currentPage, setCurrentPage] = useState(1)

  // redux
  const { categorySongs } = useSelector(
    state => ({
      categorySongs: state.getIn(['songs', 'categorySongs']),
    }),
    shallowEqual
  )
  const songList = categorySongs.playlists || []
  const total = categorySongs.total || 0
  const dispatch = useDispatch()

  function onPageChange(page, pageSize) {
    setCurrentPage(page)
    dispatch(getSongList(page))
  }

  return (
    <SongListWrapper>
      <div className='songs-list'>
        {songList
          .filter((item, index, arr) => {
            if (arr[index - 1] !== undefined) {
              return arr[index].id !== arr[index - 1].id
            }
            return false
          })
          .map((iten, index, arr) => {
            return <ANThemeCover info={iten} key={iten.id} right='30px' />
          })}
      </div>
      <ANPagination
        currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange}
      />
    </SongListWrapper>
  )
})
