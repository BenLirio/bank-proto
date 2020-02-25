import React, { createContext, useReducer } from 'react'

const data = []
for (let i = 0; i < 101; i++) {
  let businessGroup = i % 5
  const workspace = {
    key: i,
    id: 123456789 + i,
    name: 'Workspace ' + businessGroup + '-' + i,
    businessGroup,
    lastUpdated: '20/20/20',
    dateCreated: '20/20/20',
    policy: '90 days',
    type: 'Pro',
    primaryContact: 'name@bank.com',
    exchange: 'Exchange Name'
  }
  data.push(workspace)
}

const WorkspaceContext = createContext()

const workspaceReducer = (state, action) => {
  return state
}

export const WorkspaceContextProvider = ({ children }) => {
  const [workspaces, dispatchWorkspaces] = useReducer(workspaceReducer, data)
  return (
    <WorkspaceContext.Provider value={[workspaces, dispatchWorkspaces]}>
      {children}
    </WorkspaceContext.Provider>
  )
}

export default WorkspaceContext
