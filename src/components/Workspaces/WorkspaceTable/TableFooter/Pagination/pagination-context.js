import React, { createContext, useReducer, useContext, useEffect } from 'react'
import WorkspaceContext from '../../workspace-context'

const PaginationContext = createContext()

const MAX_PER_PAGE = 50

const paginationReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'length': {
      return { ...state, total: payload }
    }
    case 'set': {
      return { ...state, current: payload }
    }
    default: {
      throw new Error('Pagination Reducer - Undefined type')
    }
  }
}

export const PaginationContextProvider = ({ children }) => {
  const [pagination, dispatchPagination] = useReducer(paginationReducer, {
    current: 1,
    total: 0,
    MAX_PER_PAGE
  })
  const [workspaces] = useContext(WorkspaceContext)
  useEffect(() => {
    if (pagination.total !== workspaces.length) {
      dispatchPagination({ type: 'length', payload: workspaces.length })
    }
  }, [workspaces])

  return (
    <PaginationContext.Provider value={[pagination, dispatchPagination]}>
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationContext
