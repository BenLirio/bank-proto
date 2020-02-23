import React from 'react'
import './Filters.less'
import DateFilter from './DateFilter/DateFilter'

const Filters = () => {
  return (
    <div className={'Filters-root'}>
      <div className={'Filters-filter'}>
        <DateFilter />
      </div>
      <div className={'Filters-filter'}></div>
      <div className={'Filters-filter'}></div>
    </div>
  )
}

export default Filters
