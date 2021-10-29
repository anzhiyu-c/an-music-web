import React, { memo } from 'react'

import { headerLinks } from '@/common/local-data'

import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

export default memo(function ANAppHeader() {
  // 业务代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink exact to={item.link}>
          {item.title} <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <h1 className='logo sprite_01'>
            <a href='#/'>网易云音乐</a>
          </h1>
          <div className='select-list'>
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className='select-item'>
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className='search' placeholder='爱就一个字' prefix={<SearchOutlined />} />
          <div className='center'>创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})
