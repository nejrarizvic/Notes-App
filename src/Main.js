

export default function Main(){
   return (
   <div className="app-main">
      <div className="app-main-note-edit">
         <input type="text" id="title" autoFocus></input>
     <textarea id="body" placeholder="Write your note here . . ."></textarea>
      </div>

      <div className="app-mainnote-preview">
         <h1 className="preview-title">TITLE</h1>
         <div className="markdown-preview">note preview</div>
      </div>

   </div>
      )
}