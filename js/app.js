document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#new-entry-form');
const walks = document.querySelector('#walks');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name =  event.target.name.value;
  const distance =  event.target.distance.value;
  const time =  event.target.time.value;

  //console.log(name, distance, time);

  const newEntry = document.createElement('p');
    newEntry.textContent = `Walk Name: ${name} | Distance: ${distance} | Time Taken: ${time}`;
    newEntry.classList.add('entry')

    walks.appendChild(newEntry);

    form.reset();

});


  const deleteButton = document.createElement('button');
   deleteButton.textContent = `Delete`;
   deleteButton.addEventListener('click', () => {
     const remove = document.querySelectorAll('.entry');
     for ( entry of remove) {
       //console.log(entry);
       entry.remove();
     }
   })

walks.appendChild(deleteButton);

}); //end of DOMContentLoaded brackets
