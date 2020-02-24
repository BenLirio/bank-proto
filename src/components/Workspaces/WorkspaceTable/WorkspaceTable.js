import React from 'react'
import { Table } from 'antd'
import { AutoSizer } from 'react-virtualized'
import TableLayout from './TableLayout'

const { Column } = Table

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    id: i,
    key: i,
    name: 'Workspace ' + (i + 1)
  })
}

const WorkspaceTable = () => {
  return (
    <TableLayout>
      <Table dataSource={data} pagination={false} showHeader={false}>
        <Column title="Name" dataIndex={'name'} key={'id'} />
      </Table>
    </TableLayout>
  )
}

export default WorkspaceTable
