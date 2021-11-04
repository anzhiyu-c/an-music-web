import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopAlbumsAction } from '../../store/actionCreators'

import ANThemeHeaderNormal from '@/components/theme-header-normal'
import ANAlbumCover from '@/components/album-cover'
import ANPagination from '@/components/pagination'
import { TopAlbumWrapper } from './style'

export default memo(function ANTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1)

  const { topAlbums = [], total } = useSelector(
    state => ({
      topAlbums: state.getIn(['album', 'topAlbums']),
      total: state.getIn(['album', 'topTotal']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopAlbumsAction(1))
  }, [dispatch])

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page)
    dispatch(getTopAlbumsAction(page))
  }

  return (
    <TopAlbumWrapper>
      <ANThemeHeaderNormal title='全部新碟' />
      <div className='album-list'>
        {topAlbums.map((item, index) => {
          return (
            <ANAlbumCover size={'130'} width={'153'} bgp={'-845px'} key={item.id} info={item} />
          )
        })}
      </div>
      <ANPagination
        currentPage={currentPage}
        total={total}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  )
})
