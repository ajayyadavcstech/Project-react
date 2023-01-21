import React from 'react'
import './Left.css'
export default function Left() {
  return (
    <div className='left'>
        <div className="user">
            <div className="alphauser">
                <p>Alpha User</p>
            </div>
            <p className='email'>guest@gmail.com</p>
            <div className="view">
                <p><span>Who viewed you</span> <spa className="count">2,300</spa></p>
                <p><span>View on post</span> <span className="count">2,570</span> </p>
            </div>
        </div>
        <div className="recent">
            <h2>Recent</h2>
            <div className="list">
                <p># programming</p>
                <p># softwareenginering</p>
                <p># design</p>
                <p># developer</p>
            </div>
        </div>
    </div>
  )
}
