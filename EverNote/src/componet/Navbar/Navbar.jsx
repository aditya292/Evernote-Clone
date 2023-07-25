import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBolt, faCircleCheck, faContactBook, faGear, faHome, faNoteSticky, faPlus, faRocket, faSearch, faSpaghettiMonsterFlying, faStar, faTags, faTasks, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

function Navbar() {
  return (
    <div className="sidenavbar">
      <div className="sidenavbar-top">
        <div className="sidenavbar-top-profile">
          <div className="top-profile">
            <div className="profile-icon">
              A
            </div>
            <div className="profile-title">
              <p className='title'>Aditya Nishad</p>
              <FontAwesomeIcon className='icon' icon={faAngleDown} />
            </div>
          </div>
          <div className="setting">
            <FontAwesomeIcon className='setting-icon' icon={faGear} />
          </div>
        </div>
        <div className="sidenavbar-top-search">
          <div className="search-block">
            <FontAwesomeIcon className='icon' icon={faSearch} />
            <input type="text" placeholder='Search' />
          </div>
        </div>
        <div className="sidenavbar-top-create-note">
          <div className="create-note-btn">
            <div className="title">
              <FontAwesomeIcon className='icon' icon={faPlus} />
              <p>New</p> 
            </div>
            <FontAwesomeIcon className='icon' icon={faAngleDown} />
          </div>
        </div>
        <div className="sidenavbar-top-menu-item-1">
          <ul>
            <li>
              <FontAwesomeIcon className='icon' icon={faHome} />
              <p>Home</p>
            </li>
            <li>
              <FontAwesomeIcon className='icon' icon={faStar} />
              <p>Shortcuts</p>
            </li>
            <li>
              <FontAwesomeIcon className='icon' icon={faNoteSticky} />
              <p>Notes</p>
              <FontAwesomeIcon className='icon2' icon={faPlus} />
            </li>
            <li>
              <FontAwesomeIcon className='icon' icon={faCircleCheck} />
              <p>Tasks</p>
              <FontAwesomeIcon className='icon2' icon={faPlus} />
            </li>
          </ul>
        </div>
        <div className="sidenavbar-top-menu-item-2">
          <ul>
            <li>
              <FontAwesomeIcon className='icon' icon={faContactBook} />
              <p>Notbooks</p>
              <FontAwesomeIcon className='icon2' icon={faPlus} />
            </li>
            <li>
              <FontAwesomeIcon className='icon' icon={faTags} />
              <p>Tags</p>
              <FontAwesomeIcon className='icon3' icon={faPlus} />
            </li>
            <li>
              <FontAwesomeIcon className='icon' icon={faCircleCheck} />
              <p>Shared with Me</p>
            </li>
          </ul>
        </div>
        <div className="sidenavbar-top-menu-item-3">
          <ul>
            <li>
              <FontAwesomeIcon className='icon' icon={faTrash} />
              <p>Trash</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidenavbar-bottom">
        <div className="sidenavbar-bottom-need-help">
          <div className="upgrade">
            <FontAwesomeIcon className='icon' icon={faBolt} />
            Upgrade
          </div>
        </div>
        <div className="start">
            <FontAwesomeIcon className='icon' icon={faRocket} />
            Get Started
          </div>
      </div>
    </div>
  )
}

export default Navbar
