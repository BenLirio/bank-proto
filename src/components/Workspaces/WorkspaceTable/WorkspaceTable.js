import React from 'react'
import { Table } from 'antd'

const { Column } = Table

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    id: i,
    name: 'Workspace ' + (i + 1)
  })
}

const WorkspaceTable = () => {
  return (
    <Table dataSource={data} pagination={{ pageSize: 50 }}>
      <Column title="Name" dataIndex={'name'} key={'id'} />
    </Table>
  )
}

export default WorkspaceTable
