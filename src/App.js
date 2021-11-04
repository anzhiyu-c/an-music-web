import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'
import store from './store'

import { Skeleton } from 'antd'
import ANAppHeader from '@/components/app-header'
import ANAppFooter from '@/components/app-footer'
import ANAppPlayerBar from '@/pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ANAppHeader />
        <Suspense fallback={<Skeleton active round paragraph={{ rows: 20 }} />}>
          {renderRoutes(routes)}
        </Suspense>
        <ANAppFooter />
        <ANAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})
