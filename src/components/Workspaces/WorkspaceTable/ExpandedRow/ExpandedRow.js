import React from 'react'
import './ExpandedRow.less'
import { Typography } from 'antd'

const { Text } = Typography

const ExpandedRow = ({
  dateCreated,
  type,
  primaryContact,
  businessGroup,
  exchange
}) => {
  return (
    <div className="ExpandedRow-root">
      <div className="ExpandedRow-col">
        <Text>Workspace added: {dateCreated}</Text>
        <Text>Type: {type}</Text>
        <Text>Primary Contact: {primaryContact}</Text>
      </div>
      <div className="ExpandedRow-col">
        <Text>Business Group: {businessGroup}</Text>
        <Text>Exchange: {exchange}</Text>
      </div>
    </div>
  )
}

export default ExpandedRow
