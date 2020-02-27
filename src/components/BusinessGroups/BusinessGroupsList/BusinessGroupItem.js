import React from 'react'
import { Checkbox } from 'antd'
import Text from 'antd/lib/typography/Text'

const BusinessGroupItem = ({ name, checked, onChange }) => {
  return (
    <div>
      <Checkbox checked={checked} onChange={e => onChange(e.target.checked)}>
        <Text strong={checked}>{name}</Text>
      </Checkbox>
    </div>
  )
}

export default BusinessGroupItem
