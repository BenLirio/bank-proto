import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect
} from 'react'
import FilterContext from '../Filters/filters-context'
import moment from 'moment'

const data = []
const map = new Map()
for (let i = 0; i < 101; i++) {
  let businessGroup = i % 5
  const id = 123456789 + i
  const workspace = {
    filteredBy: new Set(['businessGroup']),
    visible: false,
    checked: false,
    key: i,
    id,
    name: 'Workspace ' + businessGroup + '-' + i,
    businessGroup,
    lastUpdated: moment().subtract(i, 'days'),
    dateCreated: moment().subtract(i * 2, 'days'),
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
      const { show, name } = payload
      const filter = workspace => {
        if (show(workspace)) {
          workspace.filteredBy.delete(name)
        } else {
          workspace.filteredBy.add(name)
        }
        workspace.visible = !workspace.filteredBy.size
        return workspace
      }
      return [workspaces.map(filter), workspacesMap]
    }
    default: {
      throw new Error('WorkspaceContext - Invalid type')
    }
  }
}
// filtered by another one means visible = false && hasFilter = false
// filtered by this one means visible = false && hasFilter = true
// created sets for each filter

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
