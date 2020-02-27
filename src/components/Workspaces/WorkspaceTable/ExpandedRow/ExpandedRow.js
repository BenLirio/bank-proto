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
        <Text>
          Workspace added:{' '}
          <Text strong>{dateCreated.format('MM/DD/YYYY')}</Text>
        </Text>
        <Text>
          Type: <Text strong>{type}</Text>
        </Text>
        <Text>
          Primary Contact: <Text strong>{primaryContact}</Text>
        </Text>
      </div>
      <div className="ExpandedRow-col">
        <Text>
          Business Group: <Text strong>{businessGroup}</Text>
        </Text>
        <Text>
          Exchange: <Text strong>{exchange}</Text>
        </Text>
      </div>
    </div>
  )
}

export default ExpandedRow
