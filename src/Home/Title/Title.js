import React from 'react'
import './Title.css'


//  using props method
 function Title({subTitle, Title}) {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{Title}</h2>
      
    </div>
  )
}
export default Title
