import React from 'react'
import './WorkspaceView.less'
import BusinessGroups from '../../components/BusinessGroups/BusinessGroups'
import Workspaces from '../../components/Workspaces/Workspaces'

const WorkspaceView = () => {
  return (
    <div className={'WorkspaceView-root'}>
      <div className={'WorkspaceView-businessGroups'}>
        <BusinessGroups />
      </div>
      <div className={'WorkspaceView-workspaces'}>
        <Workspaces />
      </div>
    </div>
  )
}

export default WorkspaceView
