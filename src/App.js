import { Layout } from 'antd'
import React from 'react'
import classes from './App.module.css'
import Header from './components/Header/Header'
import WorkspaceView from './views/WorkspaceView/WorkspaceView'

const App = () => {
  return (
    <Layout className={classes.Root}>
      <Header />
      <WorkspaceView />
    </Layout>
  )
}

export default App
