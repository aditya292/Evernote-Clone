import React from 'react'
import './NoteList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort, faBook, faFilter, faNoteSticky } from '@fortawesome/free-solid-svg-icons'

function NoteList(props) {
  return (
    <div className="note-list">
      <div className="header">
        <div className="header-title">
          <FontAwesomeIcon className='icon' icon={faNoteSticky} />
          <h1>Notes</h1> 
        </div>
        <div className="header-sub-head">
          <div className="note-count">
            2 notes
            <div className='icons'>
              <FontAwesomeIcon className='icon' icon={faArrowDownWideShort} />
              <FontAwesomeIcon className='icon' icon={faFilter} />
            </div>
          </div>
        </div>
      </div>
      <div className='note-list-body'>
        <div className="body-card">
          <div className="card-head">
            <div className="card-head-title">
              Note one
            </div>
            <div className="note-card-desc">
              Some description
            </div>
          </div>
          <div className="body-card-date">
            jul 22
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteList;