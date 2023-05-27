import HeaderButtons from "./headerButtons";

function Header({openPop, uploadNote, parseNotes, saveNotes}) {

  const handlePlusClick = (e) => {
    openPop();
  }
  
  return (
    <header className="row align-items-center justify-content-between d-flex">
    <div className="col-4 ">
    <h1>StickyNotes</h1>
    </div>
    <HeaderButtons uploadNote={uploadNote} submitBtn={parseNotes} saveNotes={saveNotes} addBtn={handlePlusClick}/>
    </header>
  );
}

export default Header;
