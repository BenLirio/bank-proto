import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect
} from 'react'
import FilterContext from '../Filters/filters-context'

const data = []
const map = new Map()
for (let i = 0; i < 101; i++) {
  let businessGroup = i % 5
  const id = 123456789 + i
  const workspace = {
    visible: false,
    checked: false,
    key: i,
    id,
    name: 'Workspace ' + businessGroup + '-' + i,
    businessGroup,
    lastUpdated: '20/20/20',
    dateCreated: '20/20/20',
    policy: '90 days',
    type: 'Pro',
    primaryContact: 'name@bank.com',
    exchange: 'Exchange Name'
  }
  map.set(id, i)
  data.push(workspace)
}

const WorkspaceContext = createContext()

const workspaceReducer = (state, action) => {
  const { type, payload } = action
  const [workspaces, workspacesMap] = state
  switch (type) {
    case 'setChecked': {
      const { id, val } = payload
      const index = workspacesMap.get(id)
      workspaces[index].checked = val
      return [...state]
    }
    case 'clearChecked': {
      const unCheck = workspace => ({ ...workspace, checked: false })
      return [workspaces.map(unCheck), workspacesMap]
    }
    case 'checkAll': {
      const checkWorkspace = workspace => ({
        ...workspace,
        checked: workspace.visible
      })
      return [workspaces.map(checkWorkspace), workspacesMap]
    }
    case 'setPolicy': {
      const { id, val } = payload
      const index = workspacesMap.get(id)
      workspaces[index].policy = val
      return [...state]
    }
    case 'setPolicies': {
      const setPolicies = workspace => ({
        ...workspace,
        policy: workspace.checked ? payload : workspace.policy
      })
      return [workspaces.map(setPolicies), workspacesMap]
    }
    case 'filter': {
      const { show } = payload
      const hide = workspace => ({
        ...workspace,
        visible: false,
        checked: false
      })
      return [workspaces.map(hide).map(show), workspacesMap]
    }
    default: {
      throw new Error('WorkspaceContext - Invalid type')
    }
  }
}

export const WorkspaceContextProvider = ({ children }) => {
  const [workspaces, dispatchWorkspaces] = useReducer(workspaceReducer, [
    data,
    map
  ])
  const [filters] = useContext(FilterContext)
  filters.reduce((filtered, filter) => {
    return filtered.filter(filter)
  }, workspaces[0])
  return (
    <WorkspaceContext.Provider
      value={[
        workspaces[0].filter(({ visible }) => visible),
        dispatchWorkspaces
      ]}
    >
      {children}
    </WorkspaceContext.Provider>
  )
}

export default WorkspaceContext
