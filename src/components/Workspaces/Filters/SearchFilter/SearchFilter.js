import React, { useContext } from 'react'
import { Typography, AutoComplete } from 'antd'
import WorkspaceContext from '../../WorkspaceTable/workspace-context'

const { Text } = Typography

const SearchFilter = () => {
  const [workspaces, dispatchWorkspaces] = useContext(WorkspaceContext)
  const setFilter = val => {
    const show = ({ name }) => {
      return name.includes(val)
    }
    dispatchWorkspaces({ type: 'filter', payload: { show, name: 'name' } })
  }
  return (
    <>
      <Text strong>SearchFilter</Text>
      <AutoComplete
        dataSource={workspaces.map(({ name }) => name)}
        onChange={val => setFilter(val)}
      />
    </>
  )
}

export default SearchFilter
