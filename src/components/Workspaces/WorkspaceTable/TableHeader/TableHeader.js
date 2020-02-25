import { Checkbox, Typography } from 'antd'
import React, { useContext } from 'react'
import WorkspaceContext from '../workspace-context'
import './TableHeader.less'

const { Text } = Typography

const TableHeader = () => {
  const [workspaces, dispatchWorkspaces] = useContext(WorkspaceContext)
  const numChecked = workspaces.reduce(
    (checked, workspace) => checked + (workspace.checked ? 1 : 0),
    0
  )
  const allChecked = numChecked === workspaces.length
  const someChecked = !allChecked && !!numChecked
  const onChecked = () => {
    if (allChecked) {
      dispatchWorkspaces({ type: 'clearChecked' })
    } else {
      dispatchWorkspaces({ type: 'checkAll' })
    }
  }
  return (
    <div className="TableHeader-root">
      <div className="TableHeader-leftPadding"></div>
      <div className="TableHeader-col TableHeader-col-name">
        <Checkbox
          checked={allChecked}
          indeterminate={someChecked}
          onChange={e => onChecked(e.target.checked)}
        >
          <Text strong>Name</Text>
        </Checkbox>
      </div>
      <div className="TableHeader-col TableHeader-col-name">
        <Text strong>ID</Text>
      </div>
      <div className="TableHeader-col TableHeader-col-name">
        <Text strong>Last Updated</Text>
      </div>
      <div className="TableHeader-col TableHeader-col-name">
        <Text strong>Policy</Text>
      </div>
    </div>
  )
}

export default TableHeader
