import React, { useContext } from 'react'
import './TableFooter.less'
import { Button } from 'antd'
import { Typography } from 'antd'
import Pagination from './Pagination/Pagination'
import PolicyContext from '../PolicyRender/policy-context'
import CheckedContext from '../Checkbox/checked-context'

const { Text } = Typography

const TableFooter = () => {
  const dispatchPolicies = useContext(PolicyContext)[1]
  const [checked] = useContext(CheckedContext)
  const changePolicies = policy => {
    dispatchPolicies({
      type: 'changeMultiple',
      payload: { ids: checked.values(), policy }
    })
  }
  return (
    <div className="TableFooter-root">
      <Text strong className="TableFooter-updateText">
        Update all selected to:
      </Text>
      <Button
        onClick={() => changePolicies('90 days')}
        className="TableFooter-button"
      >
        90 days
      </Button>
      <Button
        onClick={() => changePolicies('180 days')}
        className="TableFooter-button"
      >
        180 days
      </Button>
      <Button
        onClick={() => changePolicies('365 days')}
        className="TableFooter-button"
      >
        365 days
      </Button>
      <div style={{ flex: '1' }}></div>
      <Pagination />
    </div>
  )
}

export default TableFooter
