import React from 'react'
import './Campus.css'
import gallery_1 from '../../images/gallery-1.png'
import gallery_2 from '../../images/gallery-2.png'
import gallery_3 from '../../images/gallery-3.png'
import gallery_4 from '../../images/gallery-4.png'
import  white_arrow from '../../images/white-arrow.png'

 function Campus() {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={gallery_1} alt=''></img>
             <img src={gallery_2} alt=''></img>
              <img src={gallery_3} alt=''></img>
               <img src={gallery_4} alt=''></img>
        </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt=''></img></button>
    </div>
  )
}
export default Campus
