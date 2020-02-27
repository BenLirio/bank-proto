import { Checkbox, Typography, Button, Icon } from 'antd'
import React, { useContext } from 'react'
import WorkspaceContext from '../workspace-context'
import './TableHeader.less'
import SortContext from './sort-context'

const { Text } = Typography

const TableHeader = () => {
  const [sort, dispatchSort] = useContext(SortContext)
  const [workspaces, dispatchWorkspaces] = useContext(WorkspaceContext)
  let numChecked = 0
  let allChecked = false
  let someChecked = false
  const setSort = sort => {
    dispatchSort({ type: 'activate', payload: sort })
  }
  if (workspaces.length) {
    numChecked = workspaces.reduce(
      (checked, workspace) => checked + (workspace.checked ? 1 : 0),
      0
    )
    allChecked = numChecked === workspaces.length
    someChecked = !allChecked && !!numChecked
  }
  const onChecked = () => {
    if (allChecked) {
      dispatchWorkspaces({ type: 'clearChecked' })
    } else {
      dispatchWorkspaces({ type: 'checkAll' })
    }
  }
  return (
    <div className="TableHeader-root">
      <div className="TableHeader-leftPadding"></div>
      <div className="TableHeader-col-name-wrapper">
        <div className="TableHeader-col TableHeader-col-name">
          <Checkbox
            checked={allChecked}
            indeterminate={someChecked}
            onChange={e => onChecked(e.target.checked)}
          >
            <Text strong>Name</Text>
          </Checkbox>
        </div>
      </div>

      <div
        onClick={() => setSort('id')}
        className={`TableHeader-col-wrapper ${
          sort.name === 'id' ? 'TableHeader-active' : ''
        }`}
      >
        <div className="TableHeader-col TableHeader-col-id">
          <Text strong>
            ID{' '}
            {sort.name === 'id' ? (
              sort.direction === 'ascend' ? (
                <Icon type="caret-up" />
              ) : (
                <Icon type="caret-down" />
              )
            ) : null}
          </Text>
        </div>
      </div>
      <div
        onClick={() => setSort('date')}
        className={`TableHeader-col-wrapper ${
          sort.name === 'date' ? 'TableHeader-active' : ''
        }`}
      >
        <div className="TableHeader-col TableHeader-col-last-updated">
          <Text strong>
            Last Updated{' '}
            {sort.name === 'date' ? (
              sort.direction === 'ascend' ? (
                <Icon type="caret-up" />
              ) : (
                <Icon type="caret-down" />
              )
            ) : null}
          </Text>
        </div>
      </div>
      <div
        onClick={() => setSort('policy')}
        className={`TableHeader-col-wrapper ${
          sort.name === 'policy' ? 'TableHeader-active' : ''
        }`}
      >
        <div className="TableHeader-col TableHeader-col-policy">
          <Text strong>
            Policy{' '}
            {sort.name === 'policy' ? (
              sort.direction === 'ascend' ? (
                <Icon type="caret-up" />
              ) : (
                <Icon type="caret-down" />
              )
            ) : null}
          </Text>
        </div>
      </div>
    </div>
  )
}

export default TableHeader
