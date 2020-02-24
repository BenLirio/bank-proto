import { Table, Checkbox } from 'antd'
import React from 'react'
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
          width={200}
          dataIndex={'name'}
          key={'name'}
          render={name => <Checkbox>{name}</Checkbox>}
        />
        <Column width={200} dataIndex={'id'} key={'id'} />
        <Column width={200} dataIndex={'lastUpdated'} key={'lastUpdated'} />
        <Column dataIndex={'policy'} key={'policy'} />
      </Table>
    </TableLayout>
  )
}

export default WorkspaceTable
