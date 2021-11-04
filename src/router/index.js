import React from 'react'
import { Redirect } from 'react-router-dom'

const ANDiscover = React.lazy(() => import('../pages/discover'))
const ANRecommend = React.lazy(_ => import('../pages/discover/c-pages/recommend'))
const ANMine = React.lazy(_ => import('../pages/mine'))
const ANFriend = React.lazy(_ => import('../pages/friend'))
const ANRanking = React.lazy(_ => import('../pages/discover/c-pages/ranking'))
const ANSongs = React.lazy(_ => import('../pages/discover/c-pages/songs'))
const ANDjradio = React.lazy(_ => import('../pages/discover/c-pages/djradio'))
const ANArtist = React.lazy(_ => import('../pages/discover/c-pages/artist'))
const ANAlbum = React.lazy(_ => import('../pages/discover/c-pages/album'))
const ANPlayer = React.lazy(_ => import('../pages/player'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/discover' />,
  },
  {
    path: '/discover',
    component: ANDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />,
      },
      {
        path: '/discover/recommend',
        component: ANRecommend,
      },
      {
        path: '/discover/ranking',
        component: ANRanking,
      },
      {
        path: '/discover/songs',
        component: ANSongs,
      },
      {
        path: '/discover/djradio',
        exact: true,
        component: ANDjradio,
      },
      {
        path: '/discover/artist',
        component: ANArtist,
      },
      {
        path: '/discover/album',
        component: ANAlbum,
      },
      {
        path: '/discover/player',
        component: ANPlayer,
      },
    ],
  },
  {
    path: '/mine',
    component: ANMine,
  },
  {
    path: '/friend',
    component: ANFriend,
  },
]

export default routes
