import React from 'react'
import './Workspaces.less'
import Filters from './Filters/Filters'
import WorkspaceTable from './WorkspaceTable/WorkspaceTable'
import WorkspaceWrapper from './WorkspaceTable/WorkspaceWrapper'
import { FiltersContextProvider } from './Filters/filters-context'

const Workspaces = () => {
  return (
    <div className={'Workspaces-root'}>
      <div className={'Workspaces-filters'}>
        <Filters />
      </div>
      <div className={'Workspaces-table'}>
        <WorkspaceWrapper>
          <WorkspaceTable />
        </WorkspaceWrapper>
      </div>
    </div>
  )
}

export default Workspaces
