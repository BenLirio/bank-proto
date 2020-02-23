import { Layout } from 'antd'
import React from 'react'
import './App.less'
import Header from './components/Header/Header'
import WorkspaceView from './views/WorkspaceView/WorkspaceView'

const App = () => {
  return (
    <Layout className={'App-root'}>
      <Header />
      <WorkspaceView />
    </Layout>
  )
}

export default App
