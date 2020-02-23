import React from 'react'
import { Layout } from 'antd'
import classes from './WorkspaceView.module.css'
import BusinessGroups from '../../components/BusinessGroups/BusinessGroups'
import Workspaces from '../../components/Workspaces/Workspaces'

const WorkspaceView = () => {
  return (
    <div className={classes.Root}>
      <div className={classes.Sider}>
        <BusinessGroups />
      </div>
      <div className={classes.Content}>
        <Workspaces />
      </div>
    </div>
  )
}

export default WorkspaceView
