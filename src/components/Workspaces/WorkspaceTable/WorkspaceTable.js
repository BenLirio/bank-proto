import { Checkbox, Table } from 'antd'
import React from 'react'
import PolicyRender from './PolicyRender/PolicyRender'
import TableLayout from './TableLayout'

const { Column } = Table

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    id: 12345678 + i,
    name: 'Workspace ' + (i + 1),
    lastUpdated: '20/20/20',
    policy: '90 days'
  })
}

const WorkspaceTable = () => {
  return (
    <TableLayout>
      <Table dataSource={data} pagination={false} showHeader={false}>
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
