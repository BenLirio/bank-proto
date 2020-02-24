import React from 'react'
import './Workspaces.less'
import Filters from './Filters/Filters'
import WorkspaceTable from './WorkspaceTable/WorkspaceTable'

const Workspaces = () => {
  return (
    <div className={'Workspaces-root'}>
      <div className={'Workspaces-filters'}>
        <Filters />
      </div>
      <div className={'Workspaces-table'}>
        <WorkspaceTable />
      </div>
    </div>
  )
}

export default Workspaces
