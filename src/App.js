import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'
import store from './store'

import ANAppHeader from '@/components/app-header'
import ANAppFooter from '@/components/app-footer'
import ANAppPlayerBar from '@/pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ANAppHeader />
        {renderRoutes(routes)}
        <ANAppFooter />
        <ANAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})
