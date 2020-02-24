import React from 'react'
import { AutoSizer } from 'react-virtualized'
import TableHeader from './TableHeader/TableHeader'
import TableFooter from './TableFooter/TableFooter'
import './TableLayout.less'

// This makes the table expand to flex box and no further while enabling scroll
const FixedHeight = ({ children }) => {
  return (
    <div style={{ flex: '1' }}>
      <AutoSizer disableWidth>
        {({ height }) => {
          return <div style={{ height, overflow: 'scroll' }}>{children}</div>
        }}
      </AutoSizer>
    </div>
  )
}

const TableLayout = ({ children }) => {
  return (
    <div className="TableLayout-root">
      <TableHeader />
      <FixedHeight>{children}</FixedHeight>
      <TableFooter />
    </div>
  )
}

export default TableLayout
