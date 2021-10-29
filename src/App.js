import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'

import ANAppHeader from '@/components/app-header'
import ANAppFooter from '@/components/app-footer'

export default memo(function App() {
  return (
    <HashRouter>
      <ANAppHeader />
      {renderRoutes(routes)}
      <ANAppFooter />
    </HashRouter>
  )
})
