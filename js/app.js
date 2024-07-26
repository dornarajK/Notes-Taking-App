const addBtn=document.querySelector('#addBtn');
const main= document.querySelector('#main');


const saveNote = () => {
    const notes = document.querySelectorAll('.note textarea');

    const data= [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if(data.length=== 0){
        localStorage.removeItem('notes')
    }else{
        localStorage.setItem("notes", JSON.stringify(data))
    }
   
}

addBtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)
   



// <!-- <div class="note">
// <div class="tool">
//     <i class="fa-regular fa-floppy-disk"></i>
//     <i class="fa-solid fa-trash-can-arrow-up"></i>  
// </div>
// <textarea>
// </textarea>
// </div> -->

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML=`
    <div class="tool">
        <i class="save fa-regular fa-floppy-disk"></i>
        <i class="trash fa-solid fa-trash-can-arrow-up"></i>  
    </div>
    
    <textarea>${text}</textarea>
    `;
    note.querySelector(".trash").addEventListener(
        'click',
        function(){
            note.remove()
            saveNote()
        }  
    )
    note.querySelector('.save').addEventListener(
        'click',
        function(){
            saveNote()
        }
    )
    note.querySelector('textarea').addEventListener(
        "focusout",
        function(){
            saveNote()
        }
    )

    main.appendChild(note);
    saveNote()

}


(
    function() {
        const lsNotes =JSON.parse(localStorage.getItem("notes"))

        if(lsNotes === null){
            addNote()
        }else{
            lsNotes.forEach(
                (lsNotes) => {
                    addNote(lsNotes)
                }
            )
        }


     
     
    } 
)()