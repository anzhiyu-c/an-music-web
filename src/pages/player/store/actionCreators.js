import * as actionTypes from './constants'

import { getSongDetail, getLyric } from '@/services/player'
import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'

const changeCurrentSongAction = song => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: song,
})

const changePlayListAction = playList => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
})

const changeLyricListAction = lyricList => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList,
})

export const changeCurrentSongIndexAction = index => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex: index,
})

export const changeSequenceAction = sequence => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
})

export const changeCurrentLyricIndexAction = index => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index,
})

export const changeCurrrentIndexAndSongAction = tag => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const sequence = getState().getIn(['player', 'sequence'])
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])

    switch (sequence) {
      case 1: //随机播放
        let randomIndex = getRandomNumber(playList.length)
        let i = 1
        while (randomIndex === currentSongIndex && i <= 10) {
          i++
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex
        break
      default:
        //顺序播放
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) currentSongIndex = 0
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
    }

    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 请求歌词
    dispatch(getLyricAction(currentSong.id))
  }
}

export const getSongDetailAction = ids => {
  return (dispatch, getState) => {
    // 1.根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex(song => song.id === ids)

    let song = null

    // 判断是否找到歌曲
    if (songIndex !== -1) {
      //找到歌曲，已存在播放列表中
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
    } else {
      // 没有找到歌曲，不存在播放列表中
      getSongDetail(ids).then(res => {
        song = res.songs && res.songs[0]
        if (!song) return

        // 1.将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList]
        newPlayList.push(song)

        // 2.更新redux中的值
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))

        // 3.请求该歌曲的歌词
        dispatch(getLyricAction(song.id))
      })
    }
  }
}

export const getLyricAction = id => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}
