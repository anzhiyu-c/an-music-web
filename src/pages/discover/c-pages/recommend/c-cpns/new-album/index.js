import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { NEW_ALBUM_PAGE_NUM, NEW_ALBUM_PER_PAGE } from '@/common/contants'
import { getNewAlbumAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { AlbumWrapper } from './style'
import ANAlbumCover from '@/components/album-cover'
import ANThemeHeader from '../components/theme-header-recommend'

export default memo(function ANNewAlbum() {
  // redux hooks
  const { newAlbums } = useSelector(
    state => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  const AlbumPageNum = []
  for (let i = 0; i < NEW_ALBUM_PAGE_NUM; i++) {
    AlbumPageNum.push(i)
  }

  // outer hooks
  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])
  return (
    <AlbumWrapper>
      <ANThemeHeader title='新碟上架' />
      <div className='content'>
        <button
          className='arrow arrow-left sprite_02'
          onClick={e => pageRef.current.prev()}
        ></button>
        <div className='album'>
          <Carousel dots={false} ref={pageRef}>
            {AlbumPageNum.map(item => {
              return (
                <div key={item} className='page'>
                  {newAlbums
                    .slice(item * NEW_ALBUM_PER_PAGE, (item + 1) * NEW_ALBUM_PER_PAGE)
                    .map(iten => {
                      return (
                        <ANAlbumCover key={iten.id} info={iten} size={100} width={118} bgp='-570px'>
                          {iten.name}
                        </ANAlbumCover>
                      )
                    })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className='arrow arrow-right sprite_02'
          onClick={e => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
})
