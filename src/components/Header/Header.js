import { Layout, Icon } from 'antd'
import React from 'react'
import './Header.less'

const Header = () => {
  return (
    <Layout.Header className={'Header-root'}>
      <div className={'Header-logo'} />
      <div className={'Header-spacer'}></div>
      <Icon type="user" className={'Header-icon'} />
    </Layout.Header>
  )
}

export default Header
