import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { HeaderWrapper } from './style'

const ANThemeHeader = memo(function (props) {
  const { title, keywords } = props
  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
          {keywords.map((item, index) => {
            return (
              <div className='item' key={item}>
                <a href='/#'>
                  {item}
                  <span className='divider'>|</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <div className='right'>
        <a href='todo'>更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

ANThemeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
}
ANThemeHeader.defaultProps = {
  keywords: [],
}

export default ANThemeHeader
