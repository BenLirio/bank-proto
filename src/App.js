import { Layout } from 'antd'
import React from 'react'
import './App.less'
import Header from './components/Header/Header'
import WorkspaceView from './views/WorkspaceView/WorkspaceView'
import { SortContextProvider } from './components/Workspaces/WorkspaceTable/TableHeader/sort-context'

const App = () => {
  return (
    <Layout className={'App-root'}>
      <SortContextProvider>
        <Header />
        <WorkspaceView />
      </SortContextProvider>
    </Layout>
  )
}

export default App
