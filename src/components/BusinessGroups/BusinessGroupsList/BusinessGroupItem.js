import React from 'react'
import { Checkbox } from 'antd'

const BusinessGroupItem = ({ name }) => {
  return (
    <div>
      <Checkbox>{name}</Checkbox>
    </div>
  )
}

export default BusinessGroupItem
