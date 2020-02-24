import React from 'react'
import './BusinessGroups.less'
import { Typography, Divider } from 'antd'
import BusinessGroupsList from './BusinessGroupsList/BusinessGroupsList'

const { Text } = Typography

const BusinessGroups = () => {
  return (
    <div className={'BusinessGroups-root'}>
      <div className={'BusinessGroups-container'}>
        <Text strong>Business Group</Text>
        <Divider className={'BusinessGroups-divider'} />
        <BusinessGroupsList />
      </div>
    </div>
  )
}

export default BusinessGroups
