const input = document.getElementById('input');
input.addEventListener('click', function () {
  alert('I was clicked!');
});

function addingEventListener() {
  input.addEventListener('click', function () {
    alert('I was clicked!');
  });
}
