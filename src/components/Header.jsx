import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form";
import uploadIcon from "./upload.png";


function Header({openPop, uploadNote, parseNotes, saveNotes}) {

  const inputFile = useRef(null);

  const handlePlusClick = (e) => {
    openPop();
  }

  const handleFileInputClick = (e) => {
    inputFile.current.click();
  }
  
  return (
    <header className="row align-items-center">
    <div className="col">
    <h1>StickyNotes</h1>
    </div>
    <div className="col-3 align-item-center justify-content-center d-flex">
    <input type="file" 
    ref={inputFile}
      onChange={e => uploadNote(e)} 
      className="headerButton align-item-center justify-content-center"
      style={{display:"none"}}
      />
    <Button 
      className="importBtn1 addBtn headerButton align-item-center justify-content-center d-flex" 
      onClick={handleFileInputClick} 
      databstoggle="modal" 
      variant="light" 
      >
    <img src={uploadIcon} className="icon"></img>
    </Button>
    <Button 
      className="importBtn2 addBtn headerButton align-item-center justify-content-center d-flex" 
      onClick={parseNotes} 
      databstoggle="modal" 
      variant="light" 
      style={{fontSize: "1rem", width:"4rem"}}
      >Upload
    </Button>
    </div>
    <div className="col-1 align-self-center">
    <Button className="headerButton align-item-center justify-content-center d-flex" 
      onClick={saveNotes}
      variant="light"
      >Save Notes</Button>
    </div>
    <div className="col-1 align-self-center">
    <Button className="addBtn headerButton rounded-circle align-item-center justify-content-center d-flex" onClick={handlePlusClick} databstoggle="modal" variant="light" style={{fontSize: "2rem", paddingBottom:"0.6rem"}}>+</Button>
    </div>
    <div className="modal">
   <div className="modal_content">
     <span className="close">&times;</span>
     <p>I'm A Pop Up!!!</p>
   </div>
</div>
    </header>
  );
}

export default Header;
