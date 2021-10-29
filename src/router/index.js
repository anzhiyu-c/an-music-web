import ANDiscover from '@/pages/discover'
import ANMine from '@/pages/mine'
import ANFriend from '@/pages/friend'

const routes = [
  {
    path: '/',
    exact: true,
    component: ANDiscover,
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
