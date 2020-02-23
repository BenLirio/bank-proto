import React from 'react'
import { Layout } from 'antd'
import classes from './WorkspaceView.module.css'

const WorkspaceView = () => {
  return (
    <Layout>
      <Layout.Sider className={classes.Sider}></Layout.Sider>
      <Layout.Content className={classes.Content}></Layout.Content>
    </Layout>
  )
}

export default WorkspaceView
