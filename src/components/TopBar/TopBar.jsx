import React from 'react'
import './TopBar.css'

function TopBar() {
  return (
    <div className='topbar-container'>
        <div className="tb-name">LazyGPT</div>
        <div className="tb-status">
          <div className="circle"></div>
          <div className="statustext">Available now</div>
        </div>
    </div>
  )
}

export default TopBar