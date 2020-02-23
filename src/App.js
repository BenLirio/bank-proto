import React from 'react'
import { Layout, Button } from 'antd'
import Header from './components/Header/Header'
import WorkspaceView from './views/WorkspaceView/WorkspaceView'
import classes from './App.module.css'

const { Content, Sider } = Layout

const App = () => {
  return (
    <Layout className={classes.Root}>
      <Header />
      <WorkspaceView />
    </Layout>
  )
}

export default App
