const form = document.getElementById('listform');
form.addEventListener('submit', () => {
  //Prevents submission
  event.preventDefault();
  //Adds input content into list
  var listContainer = document.querySelector('#listcontainer');
  var listElement = document.createElement('li');
  var listContent = document.getElementById('listcontent').value;
  listElement.innerHTML = listContent;
  listContainer.appendChild(listElement);
  //Adds cross out and delete buttons
  var xoutButton = document.createElement('button')
  var deleteButton = document.createElement('button')
  listElement.appendChild(xoutButton);
  xoutButton.innerHTML = 'Cross me out!';
  listElement.appendChild(deleteButton);
  deleteButton.innerHTML = 'Delete me!';
});