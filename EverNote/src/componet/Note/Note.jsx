import React from 'react';
import './Note.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faBell, faBook, faEllipsis, faExpand, faList, faListAlt, faNoteSticky, faNotesMedical, faStickyNote, faTags } from '@fortawesome/free-solid-svg-icons';

function Note() {
  return (
    <div className="note">
      <div className="note-header">
        <div className="note-header-top">
          <div className="note-header-top-left">
            <FontAwesomeIcon className='icon' icon={faExpand} />
            <div className="notebook">
              <FontAwesomeIcon className='icon2' icon={faBook} />
              First Notebook
            </div>
          </div>
          <div className="note-header-top-right">
            <p>Only you</p>
            <button type='button'>Share</button>
            <FontAwesomeIcon className='icon' icon={faEllipsis} />
          </div>
        </div>
        <div className="note-header-date">
          Last edited on July 22, 2023
        </div>
      </div>
      <div className="note-body">
        <div className="note-body-top">
          <div className="note-body-head">
            <input type="text" placeholder='Title' />
          </div>
          <div className="note-body-content">
            <textarea placeholder='Start writing, drag files or start from a template' />
          </div>
        </div>
      </div>
      <div className="note-bottom">
          <div className="tags">
            <FontAwesomeIcon className='icon' icon={faBell} />
            <FontAwesomeIcon className='icon' icon={faTags} />
            <p>Add tag</p>
          </div>
          <div className="content">
            All changes saved
          </div>
        </div>
    </div>
  )
}

export default Note;
