import React from 'react'

const Container = ({className ,children}) => {
  return (
    <div className={`max-w-[82.75rem] px-3 mx-auto relative ${className} `} >
      {children}
    </div>
  )
}

export default Container
