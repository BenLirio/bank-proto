import React, { useContext } from 'react'
import './TableHeader.less'
import { Typography, Checkbox } from 'antd'
import CheckedContext from '../Checkbox/checked-context'
import PaginationContext from '../TableFooter/Pagination/pagination-context'
import WorkspaceContext from '../workspace-context'
import CurrentWorkspacesContext from '../TableFooter/Pagination/current-workspaces-context'

const { Text } = Typography

const TableHeader = () => {
  const [checked, dispatchChecked] = useContext(CheckedContext)
  const [{ MAX_PER_PAGE }] = useContext(PaginationContext)
  const workspaces = useContext(CurrentWorkspacesContext)

  const allSelected = checked.size == MAX_PER_PAGE
  const onCheckAll = () => {
    if (allSelected) {
      dispatchChecked({ type: 'clear' })
    } else {
      dispatchChecked({
        type: 'checkMultiple',
        payload: workspaces.map(workspace => workspace.id)
      })
    }
  }
  return (
    <div className="TableHeader-root">
      <div className="TableHeader-leftPadding"></div>
      <div className="TableHeader-col TableHeader-col-name">
        <Checkbox
          indeterminate={checked.size && !allSelected}
          checked={allSelected}
          onChange={onCheckAll}
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
