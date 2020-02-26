import React, { createContext, useReducer } from 'react'

const FiltersContext = createContext()

const filtersReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'set': {
      const { callback, name } = payload
      state[name] = callback
      return { ...state }
    }
    default: {
      throw new Error('Filters Reducer - Undefined type')
    }
  }
}

export const FiltersContextProvider = ({ children }) => {
  const [filters, dispatchFilters] = useReducer(filtersReducer, [])

  return (
    <FiltersContext.Provider value={[Object.values(filters), dispatchFilters]}>
      {children}
    </FiltersContext.Provider>
  )
}

export default FiltersContext
