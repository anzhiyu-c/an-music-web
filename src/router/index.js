import { Redirect } from 'react-router-dom'

import ANDiscover from '../pages/discover'
import ANMine from '../pages/mine'
import ANFriend from '../pages/friend'
import ANRecommend from '../pages/discover/c-pages/recommend'
// const HYDiscover = React.lazy(() => import('@/pages/discover'))
// const ANRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
// const HYRanking = React.lazy(_ => import('../pages/discover/c-pages/ranking'))
// const HYSongs = React.lazy(_ => import('../pages/discover/c-pages/songs'))
// const HYDjradio = React.lazy(_ => import('../pages/discover/c-pages/djradio'))
// const HYArtist = React.lazy(_ => import('../pages/discover/c-pages/artist'))
// const HYAlbum = React.lazy(_ => import('../pages/discover/c-pages/album'))
import ANPlayer from '../pages/player'

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
      // {
      //   path: '/discover/ranking',
      //   component: HYRanking,
      // },
      // {
      //   path: '/discover/songs',
      //   component: HYSongs,
      // },
      // {
      //   path: '/discover/djradio',
      //   exact: true,
      //   component: HYDjradio,
      // },
      // {
      //   path: '/discover/artist',
      //   component: HYArtist,
      // },
      // {
      //   path: '/discover/album',
      //   component: HYAlbum,
      // },
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
