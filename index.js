const form = document.getElementById('listform');
var xoutListener;

form.addEventListener('submit', () => {
  //Prevents submission
  event.preventDefault();
    //Querys parent node
    var listContainer = document.querySelector('#listcontainer');
    //Adds content of text box into element
    var listElement = document.createElement('label');
    var listContent = document.getElementById('listcontent').value;
    listElement.innerHTML = listContent;
    //Adds checkbox and sets its type and class
    var listCheckbox = document.createElement('input');
    listCheckbox.setAttribute('type', 'checkbox');
    listCheckbox.setAttribute('class', 'delete-this')
    //Adds unordered list container for checkbox and content
    var listUnorderedContainer = document.createElement('li');
    //Adds content and checkbox into unordered list container,
    //then the container into the parent
    if (listContent === '') {
      alert('You forgot to type something in!')
    } else {
      listUnorderedContainer.appendChild(listElement);
      listUnorderedContainer.appendChild(listCheckbox);
      listContainer.appendChild(listUnorderedContainer);
  }
});

function remove() {
  var checked = document.querySelectorAll('.delete-this:checked');
  checked.forEach((elem) => {
    elem.parentElement.style.display = "none";
  })
}