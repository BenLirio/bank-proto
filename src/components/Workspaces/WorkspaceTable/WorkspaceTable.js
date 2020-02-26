import { Table } from 'antd'
import React, { useContext } from 'react'
import ExpandedRow from './ExpandedRow/ExpandedRow'
import PolicyRender from './PolicyRender/PolicyRender'
import CurrentWorkspacesContext from './TableFooter/Pagination/current-workspaces-context'
import TableLayout from './TableLayout'
import './WorkspaceTable.less'
import NameRender from './NameRender/NameRender'
import SortContext from './TableHeader/sort-context'

const { Column } = Table

const WorkspaceTable = () => {
  const [workspaces, dispatchWorkspaces] = useContext(CurrentWorkspacesContext)
  const [sort] = useContext(SortContext)

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
        <Column
          width={250}
          dataIndex={'id'}
          key={'id'}
          sorter={(a, b) => a.id - b.id}
          sortOrder={sort.name === 'id' && sort.direction}
        />
        <Column
          width={250}
          dataIndex={'lastUpdated'}
          key={'lastUpdated'}
          render={date => date.format('MM/DD/YYYY')}
          sorter={(a, b) => a.lastUpdated.subtract(b.lastUpdated)}
          sortOrder={sort.name === 'date' && sort.direction}
        />
        <Column
          dataIndex={'policy'}
          key={'policy'}
          sorter={(a, b) => a.policy.length - b.policy.length}
          sortOrder={sort.name === 'policy' && sort.direction}
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
