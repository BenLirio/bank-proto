import React, { createContext, useReducer } from 'react'

const PolicyContext = createContext()

const policyReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'set': {
      payload.forEach(({ id, policy }) => {
        state[id] = state[id] || policy
      })
      return { ...state }
    }
    case 'change': {
      const { id, policy } = payload
      state[id] = policy
      return { ...state }
    }
    case 'changeMultiple': {
      const { ids, policy } = payload
      for (let id of ids) {
        state[id] = policy
      }
      return { ...state }
    }
    default: {
      throw new Error('Policy Context - Invalid type')
    }
  }
}

export const PolicyContextProvider = ({ children }) => {
  const [policies, dispatchPolicies] = useReducer(policyReducer, {})
  return (
    <PolicyContext.Provider value={[policies, dispatchPolicies]}>
      {children}
    </PolicyContext.Provider>
  )
}

export default PolicyContext
