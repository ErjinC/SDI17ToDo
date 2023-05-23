const form = document.getElementById('listform');

form.addEventListener('submit', () => {
  event.preventDefault();
  var listContainer = document.querySelector('#listcontainer');
  var listElement = document.createElement('p');
  var listContent = document.getElementById('listcontent').value;
  listElement.innerHTML = listContent;
  listContainer.appendChild(listElement);
});

