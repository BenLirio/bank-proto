import { Table } from 'antd'
import React, { useContext } from 'react'
import ExpandedRow from './ExpandedRow/ExpandedRow'
import PolicyRender from './PolicyRender/PolicyRender'
import CurrentWorkspacesContext from './TableFooter/Pagination/current-workspaces-context'
import TableLayout from './TableLayout'
import './WorkspaceTable.less'
import NameRender from './NameRender/NameRender'

const { Column } = Table

const WorkspaceTable = () => {
  const [workspaces, dispatchWorkspaces] = useContext(CurrentWorkspacesContext)

  const checkWorkspace = ({ id, val }) => {
    dispatchWorkspaces({ type: 'setChecked', payload: { id, val } })
  }
  const changeWorkspacePolicy = ({ id, val }) => {
    dispatchWorkspaces({ type: 'setPolicy', payload: { id, val } })
  }

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
          render={(name, { checked, id }) => (
            <NameRender
              name={name}
              checked={checked}
              onChange={val => checkWorkspace({ id, val })}
            />
          )}
        />
        <Column width={250} dataIndex={'id'} key={'id'} />
        <Column
          width={250}
          dataIndex={'lastUpdated'}
          key={'lastUpdated'}
          render={date => date.format('MM/DD/YYYY')}
        />
        <Column
          dataIndex={'policy'}
          key={'policy'}
          render={(policy, { id }) => (
            <PolicyRender
              policy={policy}
              onChange={val => changeWorkspacePolicy({ id, val })}
            />
          )}
        />
      </Table>
    </TableLayout>
  )
}

export default WorkspaceTable
