const form = document.getElementById('listitem');

form.addEventListener('submit', () => {
  event.preventDefault();
  var listContainer = document.querySelector('#list');
  var listElement = document.createElement('p');
  listElement.innerHTML = `contentcontent`;
  listContainer.appendChild(listElement);

  alert('pls work');

});

