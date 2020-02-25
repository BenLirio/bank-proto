import { Table } from 'antd'
import React, { useContext, useEffect } from 'react'
import ExpandedRow from './ExpandedRow/ExpandedRow'
import PolicyRender from './PolicyRender/PolicyRender'
import CurrentWorkspacesContext from './TableFooter/Pagination/current-workspaces-context'
import TableLayout from './TableLayout'
import './WorkspaceTable.less'
import Checkbox from './Checkbox/Checkbox'
import CheckedContext from './Checkbox/checked-context'
import PolicyContext from './PolicyRender/policy-context'

const { Column } = Table

const WorkspaceTable = () => {
  const workspaces = useContext(CurrentWorkspacesContext)
  const [checked, dispatchChecked] = useContext(CheckedContext)
  const [policies, dispatchPolicies] = useContext(PolicyContext)
  useEffect(() => {
    dispatchPolicies({
      type: 'set',
      payload: workspaces.map(({ id, policy }) => ({
        id,
        policy
      }))
    })
  }, [workspaces, dispatchPolicies])
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
          render={(name, { id }) => (
            <Checkbox
              name={name}
              onCheck={val =>
                dispatchChecked({ type: 'check', payload: { id, val } })
              }
              checked={checked.has(id)}
            />
          )}
        />
        <Column width={250} dataIndex={'id'} key={'id'} />
        <Column width={250} dataIndex={'lastUpdated'} key={'lastUpdated'} />
        <Column
          dataIndex={'policy'}
          key={'policy'}
          render={(_, { id }) => (
            <PolicyRender
              policy={policies[id]}
              onChange={policy =>
                dispatchPolicies({ type: 'change', payload: { id, policy } })
              }
            />
          )}
        />
      </Table>
    </TableLayout>
  )
}

export default WorkspaceTable
