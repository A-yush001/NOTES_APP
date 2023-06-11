import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
function NotesList({notes,handleaddnote, handledeletenote}) {
  return (
    <div className='notes-list'>
        {
            notes.map((note)=>(<Note id={note.id} text={note.text} date={note.date} handledeletenote={handledeletenote}/>)
        )}
      <AddNote handleaddnote={handleaddnote}  />
    </div>
  )
}

export default NotesList
