import { Checkbox, Table, Icon, Button } from 'antd'
import React from 'react'
import PolicyRender from './PolicyRender/PolicyRender'
import TableLayout from './TableLayout'
import './WorkspaceTable.less'
import ExpandedRow from './ExpandedRow/ExpandedRow'

const { Column } = Table

const data = []
for (let i = 0; i < 100; i++) {
  let businessGroup = i % 5
  const workspace = {
    key: i,
    id: 123456789 + i,
    name: 'Workspace ' + businessGroup + '-' + i,
    businessGroup,
    lastUpdated: '20/20/20',
    dateCreated: '20/20/20',
    policy: '90 days',
    type: 'Pro',
    primaryContact: 'name@bank.com',
    exchange: 'Exchange Name'
  }
  data.push(workspace)
}

const WorkspaceTable = () => {
  return (
    <TableLayout>
      <Table
        dataSource={data}
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
