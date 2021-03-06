import { Select, Typography } from 'antd'
import React, { useContext } from 'react'
import WorkspaceContext from '../../WorkspaceTable/workspace-context'

const { Text } = Typography
const { Option } = Select

const PolicyFilter = () => {
  const dispatchWorkspaces = useContext(WorkspaceContext)[1]
  const setFilter = val => {
    const show = ({ policy }) => {
      return val === 'all' || policy === val
    }
    dispatchWorkspaces({ type: 'filter', payload: { show, name: 'policy' } })
  }
  return (
    <div className={'Filters-filter-root'}>
      <Text strong>Policy</Text>
      <Select defaultValue="all" onChange={val => setFilter(val)}>
        <Option value="all">All</Option>
        <Option value="90 days">90 Days</Option>
        <Option value="180 days">180 Days</Option>
        <Option value="365 days">365 Days</Option>
      </Select>
    </div>
  )
}

export default PolicyFilter
