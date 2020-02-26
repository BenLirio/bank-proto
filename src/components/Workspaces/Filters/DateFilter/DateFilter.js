import React, { useContext } from 'react'
import { DatePicker, Typography } from 'antd'
import WorkspaceContext from '../../WorkspaceTable/workspace-context'
import moment from 'moment'

const { RangePicker } = DatePicker
const { Text } = Typography

const DateFilter = () => {
  const dispatchWorkspaces = useContext(WorkspaceContext)[1]
  const setFilter = val => {
    const show = ({ dateCreated }) => {
      const isBefore = dateCreated.isBefore(val[1] || moment())
      const isAfter = dateCreated.isAfter(val[0] || moment(0))
      return isBefore && isAfter
    }
    dispatchWorkspaces({ type: 'filter', payload: { show, name: 'date' } })
  }
  return (
    <>
      <Text strong>Date Created</Text>
      <RangePicker onChange={val => setFilter(val)} />
    </>
  )
}

export default DateFilter
