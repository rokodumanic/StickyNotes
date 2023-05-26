import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import PopUp from "./PopUp";
import notes from "../notes";
import { useState } from "react";
import axios from "axios";
import isEmpty from "./isEmpty";
import OBJtoXML from "./objToXml";

function App(){
    const [addNote, setAddNote]=useState(false);
    const [fileObj, setFile] = useState([]);
    const [fileContent, setFileContent] = useState('');

    const openPop = () => {
        setAddNote(true);
    }
    const closePop = () => {
        setAddNote(false);
    }

    function newNote(note){
        console.log("note", note);
        setFile((prevNotes)=>([...prevNotes, {key:fileObj.length, title:note.title, content:note.content}]));
    }

    function handleFileSelect(event){
        const file = event.target.files[0];
        console.log("event.target.files[0]",event.target.files[0])
        const reader = new FileReader();
        var pom = "";
        console.log("TYPE", typeof fileContent);
        console.log("AAAAAAAAAAAAAAAaa",file);

        reader.onload = function(event) {
           setFileContent(event.target.result);
           pom=(event.target.result);
        };

    
        reader.readAsText(file);
      }


    function parseNotes(){
      var notesArr = [];
      var parser = new DOMParser();
      console.log("fileContent", fileContent);
      var xmlFile = parser.parseFromString(fileContent, "text/xml");
      console.log("xmlDoc", xmlFile);
      
      for (var i=0; i<xmlFile.getElementsByTagName("NOTE").length; i++){
          var pom = {
            key: i,
            title: xmlFile.getElementsByTagName("TITLE")[i].attributes.value.value, 
            content:xmlFile.getElementsByTagName("CONTENT")[i].attributes.value.value
            };
            console.log("POM", pom);
          notesArr.push(pom);
        }
      setFile(notesArr);
      console.log("notesArr",notesArr);
    }


    return(
    <div>
        <Header openPop={openPop} uploadNote={handleFileSelect} parseNotes={parseNotes}/>
            {fileObj.length ? fileObj.map((eachNote) => <Note
            key={eachNote.key}
            title={eachNote.title}
            text={eachNote.content}
            />) : notes.map((eachNote) => <Note
            key={eachNote.key}
            title={eachNote.title}
            text={eachNote.text}
            />
            )}

        <PopUp open={addNote} close={closePop} newNote={newNote}/>
        <Footer/>
    </div>
    );
}

export default App;