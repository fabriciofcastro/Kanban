const cards = document.querySelectorAll('.card')
const dropzone = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})


function dragstart() {
 dropzone.forEach(dropzone => dropzone.classList.add('highlight'))

 this.classList.add('is-dragging') 
}

function drag() {
  //console.log(' is dragstart');
}

function dragend() {
  dropzone.forEach( dropzone => dropzone.classList.remove('highlight'))

  this.classList.remove('is-dragging') 
}

/* place where we will drop cards */

dropzone.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
});

function dragenter() {
  console.log('Dropzone: Enter in zone');
}

function dragover() {
  this.classList.add('over')

  // get gragging card

  const cardBeinDragged = document.querySelector('.is-dragging')

  this.appendChild(cardBeinDragged)
}

function dragleave() {
  this.classList.remove('over')
}

function drop() {
  console.log('Dropzone: dropped');
}