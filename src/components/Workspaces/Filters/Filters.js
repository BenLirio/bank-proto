import React from 'react'
import './Filters.less'
import DateFilter from './DateFilter/DateFilter'
import PolicyFilter from './PolicyFilter/PolicyFilter'
import SearchFilter from './SearchFilter/SearchFilter'

const Filters = () => {
  return (
    <div className={'Filters-root'}>
      <div className={'Filters-filter'}>
        <DateFilter />
      </div>
      <div className={'Filters-filter'}>
        <PolicyFilter />
      </div>
      <div className={'Filters-filter'}>
        <SearchFilter />
      </div>
    </div>
  )
}

export default Filters
