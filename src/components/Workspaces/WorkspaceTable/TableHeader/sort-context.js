import React, { createContext, useReducer } from 'react'

const SortContext = createContext()

const sortReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'activate': {
      const { name, direction } = state
      if (name === payload) {
        if (direction === 'ascend') {
          state.direction = 'descend'
        } else {
          state.direction = 'ascend'
        }
      } else {
        state.name = payload
        state.direction = 'ascend'
      }

      return { ...state }
    }
    default: {
      throw new Error('SortReducer - undefined type')
    }
  }
}

export const SortContextProvider = ({ children }) => {
  const [sort, dispatchSort] = useReducer(sortReducer, {
    name: 'date',
    direction: 'ascend'
  })
  return (
    <SortContext.Provider value={[sort, dispatchSort]}>
      {children}
    </SortContext.Provider>
  )
}
export default SortContext
