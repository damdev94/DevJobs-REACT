import React from 'react'

function button({children, classCss, onClick}) {
  return (
    <div className={classCss} onClick={onClick}>{children}</div>
  )
}

export default button