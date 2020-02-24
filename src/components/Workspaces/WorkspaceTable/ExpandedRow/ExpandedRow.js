import React from 'react'
import './ExpandedRow.less'
import { Typography } from 'antd'

const { Text } = Typography

const ExpandedRow = () => {
  return (
    <div className="ExpandedRow-root">
      <div className="ExpandedRow-col">
        <Text>Workspace added: </Text>
        <Text>Type: </Text>
        <Text>Primary Contact: </Text>
      </div>
      <div className="ExpandedRow-col">
        <Text>Business Group: </Text>
        <Text>Exchange: </Text>
      </div>
    </div>
  )
}

export default ExpandedRow
