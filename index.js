const form = document.getElementById('listform');
var xoutListener;

form.addEventListener('submit', () => {
  //Prevents submission
  event.preventDefault();
  //Adds input content into list
  var listContainer = document.querySelector('#listcontainer');

  var listElement = document.createElement('label');
  var listContent = document.getElementById('listcontent').value;
  listElement.innerHTML = listContent;

  var listCheckbox = document.createElement('input');
  listCheckbox.setAttribute('type', 'checkbox');
  listCheckbox.setAttribute('class', 'delete-this')

  var listUnorderedContainer = document.createElement('li');

  listUnorderedContainer.appendChild(listElement);
  listUnorderedContainer.appendChild(listCheckbox);
  listContainer.appendChild(listUnorderedContainer);
  // listContainer.appendChild(document.createElement("br"));
});

function remove() {
  var checked = document.querySelectorAll('.delete-this:checked');
  checked.forEach((elem) => {
    elem.parentElement.style.display = "none";
  })
}