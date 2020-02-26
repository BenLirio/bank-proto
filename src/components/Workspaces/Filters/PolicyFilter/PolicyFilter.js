import { Select, Typography } from 'antd'
import React, { useContext } from 'react'
import WorkspaceContext from '../../WorkspaceTable/workspace-context'

const { Text } = Typography
const { Option } = Select

const PolicyFilter = () => {
  const dispatchWorkspaces = useContext(WorkspaceContext)[1]
  const setFilter = val => {
    const show = workspace => {
      const { policy } = workspace
      const visible = val === 'all' || policy === val
      return { ...workspace, visible }
    }
    dispatchWorkspaces({ type: 'filter', payload: { show } })
  }
  return (
    <>
      <Text strong>Test</Text>
      <Select onChange={val => setFilter(val)}>
        <Option value="all">all</Option>
        <Option value="90 days">90 days</Option>
        <Option value="180 days">180 days</Option>
        <Option value="365 days">365 days</Option>
      </Select>
    </>
  )
}

export default PolicyFilter
