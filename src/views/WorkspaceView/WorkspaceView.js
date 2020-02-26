import React from 'react'
import './WorkspaceView.less'
import BusinessGroups from '../../components/BusinessGroups/BusinessGroups'
import Workspaces from '../../components/Workspaces/Workspaces'
import { FiltersContextProvider } from '../../components/Workspaces/Filters/filters-context'

const WorkspaceView = () => {
  return (
    <div className={'WorkspaceView-root'}>
      <FiltersContextProvider>
        <div className={'WorkspaceView-businessGroups'}>
          <BusinessGroups />
        </div>
        <div className={'WorkspaceView-workspaces'}>
          <Workspaces />
        </div>
      </FiltersContextProvider>
    </div>
  )
}

export default WorkspaceView
