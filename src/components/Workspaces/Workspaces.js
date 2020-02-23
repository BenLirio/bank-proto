import React from 'react'
import './Workspaces.less'
import Filters from '../Filters/Filters'

const Workspaces = () => {
  return (
    <div className={'Workspaces-root'}>
      <div className={'Workspaces-filters'}>
        <Filters />
      </div>
      <div className={'Workspaces-table'}></div>
    </div>
  )
}

export default Workspaces
