import { Button, Typography } from 'antd'
import React from 'react'
import Pagination from './Pagination/Pagination'
import './TableFooter.less'

const { Text } = Typography

const TableFooter = () => {
  return (
    <div className="TableFooter-root">
      <Text strong className="TableFooter-updateText">
        Update all selected to:
      </Text>
      <Button className="TableFooter-button">90 days</Button>
      <Button className="TableFooter-button">180 days</Button>
      <Button className="TableFooter-button">365 days</Button>
      <div style={{ flex: '1' }}></div>
      <Pagination />
    </div>
  )
}

export default TableFooter
