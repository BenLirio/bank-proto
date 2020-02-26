import React, { useReducer, useEffect, useContext } from 'react'
import { AutoSizer, List } from 'react-virtualized'
import BusinessGroupItem from './BusinessGroupItem'
import FiltersContext from '../../Workspaces/Filters/filters-context'
import WorkspaceContext from '../../Workspaces/WorkspaceTable/workspace-context'

const ROW_HEIGHT = 24

// Sample Data
const data = []
for (let i = 0; i < 100; i++) {
  data.push('Business Group ' + (i + 1))
}

const checkedReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'set': {
      const { index, val } = payload
      if (val) {
        state.add(index)
      } else {
        state.delete(index)
      }
      return new Set(state)
    }
    default: {
      throw new Error('Checked Reducer - Undefined type')
    }
  }
}

const BusinessGroupsList = () => {
  const [checked, dispatchChecked] = useReducer(checkedReducer, new Set())
  const dispatchFilters = useContext(FiltersContext)[1]
  const dispatchWorkspaces = useContext(WorkspaceContext)[1]
  useEffect(() => {
    const show = workspace => {
      return { ...workspace, visible: checked.has(workspace.businessGroup) }
    }

    dispatchWorkspaces({ type: 'filter', payload: { show } })
  }, [checked])
  const rowRender = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <BusinessGroupItem
          name={data[index]}
          checked={checked.has(index)}
          onChange={val =>
            dispatchChecked({ type: 'set', payload: { index, val } })
          }
        />
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
