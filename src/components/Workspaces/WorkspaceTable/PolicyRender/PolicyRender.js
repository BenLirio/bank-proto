import React from 'react'
import { Select, Button } from 'antd'
import './PolicyRender.less'

const PolicyRender = policy => {
  return (
    <div className="PolicyRender-root">
      <Select className="PolicyRender-select"></Select>
      <div style={{ flex: '1' }}></div>
      <Button className="PolicyRender-button">More</Button>
    </div>
  )
}

export default PolicyRender
