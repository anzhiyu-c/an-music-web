import React, { memo } from 'react'
import { HeaderWrapper } from './style'
export default memo(function HeardRcmRight(props) {
  const { leftTitle, rightText } = props
  return (
    <HeaderWrapper>
      <h3 className='left'>{leftTitle}</h3>
      {rightText ? <a href='/todo'>{rightText}</a> : null}
    </HeaderWrapper>
  )
})
