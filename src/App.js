import { useState ,useEffect} from "react";
import NotesList from "./Components/NotesList";
import {nanoid} from 'nanoid'
import Search from "./Components/Search";
import Header from "./Components/Header";


function App() {
  const[notes,setNotes]=useState(!localStorage.getItem('react-notes-app-data')?[
    {
    id:nanoid(),
    text:"This is Ayush1!",
    date:"6/6/2023",
    },
    {
      id:nanoid(),
      text:"This is Ayush2!",
      date:"7/6/2023",
      },
      {
        id:nanoid(),
        text:"This is Ayush3!",
        date:"8/6/2023",
        },
        

]:
JSON.parse(localStorage.getItem('react-notes-app-data'))
);

const [searchText,setSearchText]=useState('');
const [darkMode,setDarkMode]=useState(false);


useEffect(()=>{
 const savedNotes1=JSON.parse(localStorage.getItem('react-notes-app-data'));

  if(savedNotes1)
  {
    setNotes(savedNotes1);
  }


},[]);



useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes));

},[notes]);

const newAddNote=(text)=>{
const date=new Date();
const newNote={
  id:nanoid(),
  text:text,
  date:date.toLocaleDateString(),
}
const newNotes=[...notes,newNote];
setNotes(newNotes);
}

const deleteNote=(id)=>{
 const newnotes=notes.filter((note)=> note.id!==id)
 setNotes(newnotes);
}
  return (
   <>
   <div className={`${darkMode && 'dark-mode'}`}>
   <div className="container">
    <Header handleToggleMode={setDarkMode}/>
    <Search handlesearchnote={setSearchText}/>
    <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
    handleaddnote={newAddNote}
    handledeletenote={deleteNote}
    />
   </div>
   </div>
  
   </>
  );
}

export default App;
