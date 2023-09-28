import React from 'react'
import './MemoryCard.css'
import { useState } from 'react'

function MemoryCard(props) {
  const [isFlipped,setIsFlipped] = useState(false);

  const _clickHandler = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className='MemoryCard' onClick={_clickHandler}>
      <div className={props.isFlipped ? 'MemoryCardInner flipped' : 'MemoryCardInner'}>
        <div className='MemoryCardBack'>
          <img className='card-image' src="https://www.digitalcrafts.com/media/Default/assets/logos/dc-logo.svg" alt="" />
        </div>
        <div className='MemoryCardFront'>
          {props.symbol}
        </div>
      </div>
    </div>
  )
}

export default MemoryCard