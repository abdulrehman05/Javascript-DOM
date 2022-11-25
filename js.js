//deleting the books
const list = document.querySelector('#book-list ul');
list.addEventListener('click', (event)=>{
if(event.target.className == 'delete'){
    const li = event.target.parentElement;
    list.removeChild(li)
}
})

//add book
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;


    //alternative method
    // const element =`<li>
    // <span class="name">${value}</span>
    // <span class="delete">delete</span>
    // </li>`   
    // list.innerHTML += element

//video method
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

deleteBtn.textContent = 'delete';
bookName.textContent = value

bookName.classList.add('name')
deleteBtn.classList.add('delete')

li.appendChild(bookName);
li.appendChild(deleteBtn);

list.appendChild(li);

})


// hide books
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change',event =>{
    if(hideBox.checked){
        list.style.display = 'none';
    }else{
        list.style.display = 'initial';
    }
})


// search
const searchBar = document.forms["search-books"].querySelector('input');
searchBar.addEventListener('keyup', event =>{
    const term = event.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
    Array.from(books).forEach(book=>{
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block'
        }else{
            book.style.display = 'none'
        }
    })
})


// tabs
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', event =>{
    if(event.target.tagName == 'LI'){
        const targerPanel = document.querySelector(event.target.dataset.target);
        const tabss = document.querySelectorAll('.tabs li');
        tabss.forEach(tabs => {
            tabs.classList.remove('active');
        });
        event.target.classList.add('active')
        panels.forEach(panel => {
            if(panel == targerPanel){
                panel.classList.add('active');
            }else{
                panel.classList.remove('active');
            }

        }); 
    }
})