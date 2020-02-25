import React, { useState } from 'react'
import { Checkbox as AntdCheckbox } from 'antd'
const Checkbox = ({ name, onCheck, checked }) => {
  return (
    <AntdCheckbox checked={checked} onChange={e => onCheck(e.target.checked)}>
      {name}
    </AntdCheckbox>
  )
}

export default Checkbox
