import React from 'react'
import { Table } from 'antd'
import { AutoSizer } from 'react-virtualized'

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
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#000', height: '100px' }}></div>
      <div style={{ flex: '1' }}>
        <AutoSizer disableWidth>
          {({ height }) => {
            console.log('height', height)
            return (
              <div style={{ height, overflow: 'scroll' }}>
                <Table dataSource={data} pagination={false} showHeader={false}>
                  <Column title="Name" dataIndex={'name'} key={'id'} />
                </Table>
              </div>
            )
          }}
        </AutoSizer>
      </div>
      <div style={{ background: '#000', height: '100px' }}></div>
    </div>
    // <AutoSizer disableWidth>
    //   {({ height }) => {
    //     return <div style={{ height, background: '#000' }}></div>
    //   }}
    // </AutoSizer>
    // {/* <Table dataSource={data} pagination={{ pageSize: 50 }}>
    //   <Column title="Name" dataIndex={'name'} key={'id'} />
    // </Table> */}
  )
}

export default WorkspaceTable
