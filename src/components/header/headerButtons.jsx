import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import uploadIcon from "../upload.png";

function HeaderButtons({uploadNote, submitBtn, saveNotes, addBtn}){
    const [width, setWidth] = useState(window.innerWidth);
      useEffect(() => {
        function dimensionsResize(){
          setWidth(window.innerWidth);
        }
        window.addEventListener('resize', dimensionsResize);
      })
    const inputFile = useRef(null);

    const fileSelectBtn = (e) => {
        inputFile.current.click();
    }

    return(
        <div className="col-md-6 col-sm-7 row justify-content-end d-flex">
            <div className="col-lg-4 col-md-5 col-sm-6 ml-1 align-item-center justify-content-center d-flex">
                <input type="file" 
                ref={inputFile}
                  onChange={e => uploadNote(e)} 
                  className="headerButton align-item-center justify-content-center"
                  style={{display:"none"}}
                  />
                <Button 
                  className="importBtn1 headerButton align-item-center justify-content-center d-flex" 
                  onClick={fileSelectBtn} 
                  databstoggle="modal" 
                  variant="light" 
                  >
                <img src={uploadIcon} className="icon" alt="select file button"></img>
                </Button>
                <Button 
                  className="importBtn2 headerButton align-item-center justify-content-center d-flex" 
                  onClick={submitBtn} 
                  databstoggle="modal" 
                  variant="light" 
                  style={{fontSize: "1rem", width:"4rem"}}
                  >Upload
                </Button>
            </div>
            {width >= 1140 ? 
            <div className="col-lg-3 align-self-center">
                <Button className="headerButton align-item-center justify-content-center d-flex" 
                onClick={saveNotes}
                variant="light"
              >Save notes</Button>
            </div> : 
            <div className="col-md-3 col-sm-3 ml-1 align-self-center">
                <Button className="headerButton align-item-center justify-content-center d-flex" 
                onClick={saveNotes}
                variant="light"
              >Save</Button>
            </div>}
            
            <div className="col-lg-1 col-md-2 col-sm-2 ml-1 align-self-center">
                <Button className="addBtn headerButton rounded-circle align-item-center justify-content-center d-flex" 
                onClick={addBtn} 
                databstoggle="modal" 
                variant="light" 
                style={{fontSize: "2rem", paddingBottom:"0.6rem"}}
                >+
                </Button>
            </div>
        </div>
    );
}

export default HeaderButtons;