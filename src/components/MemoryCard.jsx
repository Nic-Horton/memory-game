import React from 'react'
import './MemoryCard.css'

function MemoryCard(props) {

  return (
    <div className='MemoryCard' onClick={props.pickCard}>
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