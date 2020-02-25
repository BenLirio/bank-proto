import React, { createContext, useContext } from 'react'
import WorkspaceContext from '../../workspace-context'
import PaginationContext from './pagination-context'

const CurrentWorkspacesContext = createContext()

export const CurrentWorkspacesContextProvider = ({ children }) => {
  const [workspaces, dispatchWorkspaces] = useContext(WorkspaceContext)
  const [{ MAX_PER_PAGE, current }] = useContext(PaginationContext)
  const lastIndex = current * MAX_PER_PAGE
  const firstIndex = lastIndex - MAX_PER_PAGE
  const paginatedWorkspaces = workspaces.slice(firstIndex, lastIndex)
  return (
    <CurrentWorkspacesContext.Provider
      value={[paginatedWorkspaces, dispatchWorkspaces]}
    >
      {children}
    </CurrentWorkspacesContext.Provider>
  )
}
export default CurrentWorkspacesContext
