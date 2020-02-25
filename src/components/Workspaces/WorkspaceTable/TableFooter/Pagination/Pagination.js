import React, { useContext } from 'react'
import { Pagination as AntdPagination } from 'antd'
import PaginationContext from './pagination-context'

const Pagination = () => {
  const [{ MAX_PER_PAGE, current, total }, dispatchPagination] = useContext(
    PaginationContext
  )
  return (
    <AntdPagination
      defaultPageSize={MAX_PER_PAGE}
      current={current}
      total={total}
      onChange={val => dispatchPagination({ type: 'set', payload: val })}
    />
  )
}

export default Pagination
