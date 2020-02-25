import React from 'react'
import './Workspaces.less'
import Filters from './Filters/Filters'
import WorkspaceTable from './WorkspaceTable/WorkspaceTable'
import WorkspaceWrapper from './WorkspaceTable/WorkspaceWrapper'
import { CheckedContextProvider } from './WorkspaceTable/Checkbox/checked-context'

const Workspaces = () => {
  return (
    <div className={'Workspaces-root'}>
      <div className={'Workspaces-filters'}>
        <Filters />
      </div>
      <div className={'Workspaces-table'}>
        <WorkspaceWrapper>
          <CheckedContextProvider>
            <WorkspaceTable />
          </CheckedContextProvider>
        </WorkspaceWrapper>
      </div>
    </div>
  )
}

export default Workspaces
