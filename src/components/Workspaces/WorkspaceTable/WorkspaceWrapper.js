import React from 'react'
import { WorkspaceContextProvider } from './workspace-context'
import { PaginationContextProvider } from './TableFooter/Pagination/pagination-context'
import { CurrentWorkspacesContextProvider } from './TableFooter/Pagination/current-workspaces-context'

const WorkspaceWrapper = ({ children }) => {
  return (
    <WorkspaceContextProvider>
      <PaginationContextProvider>
        <CurrentWorkspacesContextProvider>
          {children}
        </CurrentWorkspacesContextProvider>
      </PaginationContextProvider>
    </WorkspaceContextProvider>
  )
}

export default WorkspaceWrapper
