import { Checkbox, Table } from 'antd'
import React, { useContext } from 'react'
import ExpandedRow from './ExpandedRow/ExpandedRow'
import PolicyRender from './PolicyRender/PolicyRender'
import CurrentWorkspacesContext from './TableFooter/Pagination/current-workspaces-context'
import TableLayout from './TableLayout'
import './WorkspaceTable.less'

const { Column } = Table

const WorkspaceTable = () => {
  const workspaces = useContext(CurrentWorkspacesContext)
  return (
    <TableLayout>
      <Table
        dataSource={workspaces}
        pagination={false}
        showHeader={false}
        size="small"
        expandedRowRender={ExpandedRow}
        className="WorkspaceTable-table"
      >
        <Column
          width={250}
          dataIndex={'name'}
          key={'name'}
          render={name => <Checkbox>{name}</Checkbox>}
        />
        <Column width={250} dataIndex={'id'} key={'id'} />
        <Column width={250} dataIndex={'lastUpdated'} key={'lastUpdated'} />
        <Column dataIndex={'policy'} key={'policy'} render={PolicyRender} />
      </Table>
    </TableLayout>
  )
}

export default WorkspaceTable
