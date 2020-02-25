import React, { createContext, useReducer, useContext, useEffect } from 'react'
import WorkspaceContext from '../workspace-context'
import PaginationContext from '../TableFooter/Pagination/pagination-context'

const CheckedContext = createContext()

const checkedReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'check': {
      if (payload.val) {
        state.add(payload.id)
      } else {
        state.delete(payload.id)
      }
      return new Set(state)
    }
    case 'clear': {
      return new Set()
    }
    case 'checkMultiple': {
      return new Set(payload)
    }
    default: {
      throw new Error('Checked Reducer - Invalid Type')
    }
  }
}

export const CheckedContextProvider = ({ children }) => {
  const [checked, dispatchChecked] = useReducer(checkedReducer, new Set())
  const [pagination] = useContext(PaginationContext)
  useEffect(() => {
    dispatchChecked({ type: 'clear' })
  }, [pagination])
  return (
    <CheckedContext.Provider value={[checked, dispatchChecked]}>
      {children}
    </CheckedContext.Provider>
  )
}
export default CheckedContext
