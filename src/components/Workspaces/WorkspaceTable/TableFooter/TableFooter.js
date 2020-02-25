import { Button, Typography } from 'antd'
import React, { useContext } from 'react'
import Pagination from './Pagination/Pagination'
import './TableFooter.less'
import WorkspaceContext from '../workspace-context'

const { Text } = Typography

const TableFooter = () => {
  const dispatchWorkspaces = useContext(WorkspaceContext)[1]
  const setPolicies = policy => {
    dispatchWorkspaces({ type: 'setPolicies', payload: policy })
  }
  return (
    <div className="TableFooter-root">
      <Text strong className="TableFooter-updateText">
        Update all selected to:
      </Text>
      <Button
        className="TableFooter-button"
        onClick={() => setPolicies('90 days')}
      >
        90 days
      </Button>
      <Button
        className="TableFooter-button"
        onClick={() => setPolicies('180 days')}
      >
        180 days
      </Button>
      <Button
        className="TableFooter-button"
        onClick={() => setPolicies('365 days')}
      >
        365 days
      </Button>
      <div style={{ flex: '1' }}></div>
      <Pagination />
    </div>
  )
}

export default TableFooter
