import React from 'react'
import './WorkspaceView.less'
import BusinessGroups from '../../components/BusinessGroups/BusinessGroups'
import Workspaces from '../../components/Workspaces/Workspaces'
import { FiltersContextProvider } from '../../components/Workspaces/Filters/filters-context'
import WorkspaceWrapper from '../../components/Workspaces/WorkspaceTable/WorkspaceWrapper'

const WorkspaceView = () => {
  return (
    <div className={'WorkspaceView-root'}>
      <FiltersContextProvider>
        <WorkspaceWrapper>
          <div className={'WorkspaceView-businessGroups'}>
            <BusinessGroups />
          </div>
          <div className={'WorkspaceView-workspaces'}>
            <Workspaces />
          </div>
        </WorkspaceWrapper>
      </FiltersContextProvider>
    </div>
  )
}

export default WorkspaceView
