import React from 'react'
import { AutoSizer, List } from 'react-virtualized'
import BusinessGroupItem from './BusinessGroupItem'

const ROW_HEIGHT = 24

// Sample Data
const data = []
for (let i = 0; i < 100; i++) {
  data.push('Business Group ' + (i + 1))
}

const BusinessGroupsList = () => {
  const rowRender = ({ index, ...rest }) => {
    return (
      <div {...rest}>
        <BusinessGroupItem name={data[index]} />
      </div>
    )
  }
  // flex 1 1 auto is so React Virtualized AutoSizer works as expected
  return (
    <div style={{ flex: '1 1 auto' }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowRenderer={rowRender}
            rowHeight={ROW_HEIGHT}
            rowCount={data.length}
          />
        )}
      </AutoSizer>
    </div>
  )
}

export default BusinessGroupsList
