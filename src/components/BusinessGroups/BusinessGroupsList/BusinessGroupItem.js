import React from 'react'
import { Checkbox } from 'antd'

const BusinessGroupItem = ({ name, checked, onChange }) => {
  return (
    <div>
      <Checkbox checked={checked} onChange={e => onChange(e.target.checked)}>
        {name}
      </Checkbox>
    </div>
  )
}

export default BusinessGroupItem
