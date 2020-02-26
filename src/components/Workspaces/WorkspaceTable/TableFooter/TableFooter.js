import { Button, Typography, Modal } from 'antd'
import React, { useContext } from 'react'
import Pagination from './Pagination/Pagination'
import './TableFooter.less'
import WorkspaceContext from '../workspace-context'

const { Text } = Typography
const { confirm } = Modal

const TableFooter = () => {
  const [workspaces, dispatchWorkspaces] = useContext(WorkspaceContext)
  const setPolicies = policy => {
    dispatchWorkspaces({ type: 'setPolicies', payload: policy })
  }
  const showConfirm = policy => {
    const numChecked = workspaces.reduce((acc, { checked }) => {
      return acc + (checked ? 1 : 0)
    }, 0)
    confirm({
      title: 'Confirm',
      content: `Change ${numChecked} workspaces to ${policy}`,
      onCancel() {},
      onOk() {
        setPolicies(policy)
      }
    })
  }
  const buttons = ['90 days', '180 days', '365 days']
  return (
    <div className="TableFooter-root">
      <Text strong className="TableFooter-updateText">
        Update all selected to:
      </Text>
      {buttons.map(button => {
        return (
          <Button
            key={button}
            className="TableFooter-button"
            onClick={() => showConfirm(button)}
          >
            {button}
          </Button>
        )
      })}
      <div style={{ flex: '1' }}></div>
      <Pagination />
    </div>
  )
}

export default TableFooter
