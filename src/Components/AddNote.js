import React, { useState } from 'react'

const AddNote = ({handleaddnote,handledeletenote}) => {
    const[noteText,setnoteText] =useState() 
    const characterLimit=200;
    const addNote = (event) => {
        if(event.target.value.length<=200)
        setnoteText(event.target.value)
    }
    const savenote=()=>{
        if(noteText.trim().length>0)
        {
            handleaddnote(noteText)
            
        }
        setnoteText("");
    }
  return (
    <div className="note new">
        <textarea name="" id="" cols="10" rows="8"
        placeholder='Type to add note....'
        onChange={addNote}
        value={noteText}
        ></textarea>
        <div className='note-footer'>
            <small>{(characterLimit) - noteText?.length} Remaining </small>
            <button className='save' onClick={savenote}> Save</button>
        </div>
      
    </div>
  )
}

export default AddNote
