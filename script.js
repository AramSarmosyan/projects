let tel1 = document.getElementById('tel1')
let copy_button = document.getElementById('copy_button') 
let coment_button = document.getElementById('coment_button')
let comentSection = document.getElementById('coment')
let new_coment = document.getElementById('new_coment')
let delete_button = document.getElementById('delete_button')
// let coment_textarea = document.getElementById('coment_textarea')
let mycoment = 'мой коментарий'
let close_button = document.getElementById('close_button')
let open_button = document.getElementById('open_button')
let basket = document.getElementById('basket_section')
mycoment.className = 'coment_text'

let input_value = ''
coment_textarea.value = input_value
coment_textarea.addEventListener('input', (event) => {
    input_value = event.target.value
    console.log(input_value)
})

copy_button.addEventListener('click', function(){
    navigator.clipboard.writeText(copy_button.value)
})

// coment_button.addEventListener('click', function(){
//     let delete_btn = document.createElement('button')
//     let newElement = document.createElement('div')
//     newElement.className = 'coment_div_div'   
//     delete_btn.className = 'coment_button'
//     delete_btn.innerHTML = 'Удалить коментарий'
//     newElement.appendChild(delete_btn)
//     new_coment.appendChild(newElement)
//     newElement.innerHTML = mycoment

//     //  delete_button.addEventListener('click', function(){
//     //     new_coment.removeChild(newElement)
//     // })   
// })

const notesEl = document.querySelector('.notes');
const addBtn = document.getElementById('coment_button')

function createNote(title, text) {
  const noteEl = document.createElement('div');
  noteEl.classList.add('note');
  noteEl.innerHTML = `
      <div class="note-header">
        <p id="note-title">${title}</p>
        <textarea id="note-title-input" class="coment_textarea">${title}</textarea>
        <div class="buttons_container">
          <button class="note-edit"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="note-delete"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
      <p id="note-text">${text}</p>
      <textarea id="note-textarea" class="coment_textarea_two">${text}</textarea>
  `

  const editBtn = noteEl.querySelector('.note-edit');
  const deleteBtn = noteEl.querySelector('.note-delete');
  const titleEl = noteEl.querySelector('#note-title');
  const textEl = noteEl.querySelector('#note-text');
  const titleInputEl = noteEl.querySelector('#note-title-input');
  const textInputEl = noteEl.querySelector('#note-textarea');

  editBtn.addEventListener('click', (e) => {
    titleEl.classList.toggle('hidden');
    textEl.classList.toggle('hidden');

    titleInputEl.classList.toggle('hidden');
    textInputEl.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', (e) => {
    noteEl.remove();
  });

  titleInputEl.addEventListener('input', (e) => {
    titleEl.innerText = e.target.value;
  });

  textInputEl.addEventListener('input', (e) => {
    textEl.innerText = e.target.value;
  });

  return noteEl;
}

addBtn.addEventListener('click', (e) => {
  const el = createNote("Ваше имя", "Ваш коментарий");
  new_coment.appendChild(el);
});





open_button.addEventListener('click', function(){
    basket_section.style.display = 'block'
})
close_button.addEventListener('click', function(){
    basket_section.style.display = 'none'
})