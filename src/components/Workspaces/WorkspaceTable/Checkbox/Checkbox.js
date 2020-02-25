import { Checkbox as AntdCheckbox } from 'antd'
import React from 'react'
const Checkbox = ({ name, onCheck, checked }) => {
  return (
    <AntdCheckbox checked={checked} onChange={e => onCheck(e.target.checked)}>
      {name}
    </AntdCheckbox>
  )
}

export default Checkbox
