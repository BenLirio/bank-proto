import React from 'react'
import { DatePicker, Typography } from 'antd'

const { RangePicker } = DatePicker
const { Text } = Typography

const DateFilter = () => {
  return (
    <>
      <Text strong>Date Created</Text>
      <RangePicker />
    </>
  )
}

export default DateFilter
