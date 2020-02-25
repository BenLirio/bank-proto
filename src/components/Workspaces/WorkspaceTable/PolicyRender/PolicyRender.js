import { Select } from 'antd'
import React from 'react'
import './PolicyRender.less'
const { Option } = Select
const PolicyRender = ({ policy, onChange }) => {
  return (
    <div className="PolicyRender-root">
      <Select
        onChange={policy => onChange(policy)}
        value={policy}
        className="PolicyRender-select"
      >
        <Option value="90 days">90 days</Option>
        <Option value="180 days">180 days</Option>
        <Option value="365 days">365 days</Option>
      </Select>
    </div>
  )
}

export default PolicyRender
