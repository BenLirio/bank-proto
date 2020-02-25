import { Checkbox } from 'antd'
import React from 'react'
const NameRender = ({ name, checked, onChange }) => {
  return (
    <Checkbox checked={checked} onChange={e => onChange(e.target.checked)}>
      {name}
    </Checkbox>
  )
}

export default NameRender
