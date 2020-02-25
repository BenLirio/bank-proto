import { Checkbox, Typography } from 'antd'
import React from 'react'
import './TableHeader.less'

const { Text } = Typography

const TableHeader = () => {
  return (
    <div className="TableHeader-root">
      <div className="TableHeader-leftPadding"></div>
      <div className="TableHeader-col TableHeader-col-name">
        <Checkbox>
          <Text strong>Name</Text>
        </Checkbox>
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
