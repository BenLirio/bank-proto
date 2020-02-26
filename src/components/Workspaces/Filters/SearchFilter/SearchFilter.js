import React, { useContext } from 'react'
import { Typography, AutoComplete } from 'antd'
import WorkspaceContext from '../../WorkspaceTable/workspace-context'

const { Text } = Typography

const SearchFilter = () => {
  const dispatchWorkspaces = useContext(WorkspaceContext)[1]
  const setFilter = val => {
    const show = ({ name }) => {
      return name.includes(val)
    }
    setTimeout(() => {
      dispatchWorkspaces({ type: 'filter', payload: { show, name: 'name' } })
    }, 0)
  }
  return (
    <>
      <Text strong>SearchFilter</Text>
      <AutoComplete onChange={val => setFilter(val)} />
    </>
  )
}

export default SearchFilter
