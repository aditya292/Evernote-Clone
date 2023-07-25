
import React from 'react'
import './App.scss'
import Navbar from './componet/Navbar/Navbar'
import NoteList from './componet/NoteList/NoteList'
import Note from './componet/Note/Note'

function App() {


  return (
    <div className="container">
      <Navbar />
      <NoteList />
      <Note />
   </div>
  )
}

export default App
