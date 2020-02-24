import React from 'react'
import './TableHeader.less'
import { Typography } from 'antd'

const { Text } = Typography

const TableHeader = () => {
  return (
    <div className="TableHeader-root">
      <div className="TableHeader-col TableHeader-col-name">
        <Text strong>Name</Text>
      </div>
      <div className="TableHeader-col TableHeader-col-name">
        <Text strong>ID</Text>
      </div>
      <div className="TableHeader-col TableHeader-col-name">
        <Text strong>Last Updated</Text>
      </div>
      <div className="TableHeader-col TableHeader-col-name">
        <Text strong>Policy</Text>
      </div>
    </div>
  )
}

export default TableHeader
