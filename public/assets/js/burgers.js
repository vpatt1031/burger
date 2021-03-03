document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const changeBurgerEaten = document.querySelectorAll('.change-burger');
  
    // Set up the event listener for the create button
    if (changeBurgerEaten) {
      changeBurgerEaten.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.dataset.id;
          console.log(e.target)
          console.log(id)
          // const devouredBurger = e.target.getAttribute('data-newburger');
  
          // const newEatenBurger = {
          //   devoured: devouredBurger,
          // };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            // body: JSON.stringify(newEatenBurger),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              
              location.reload('/');
            } else {
              // alert('something went wrong!');
              console.log(response.message)
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurger = document.getElementById('create-form');
  
    if (createBurger) {
      createBurger.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name
        const newBurger = {
          name: document.getElementById('ca').value.trim(),
        };
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById('ca').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Created a new burger!');
          location.reload();
        });
      });
    }
  
    // DELETE
    const deleteBurgerBtns = document.querySelectorAll('.change-delete');

    // Set up the event listeners for each delete button
    deleteBurgerBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
  
        // Send the delete request
        fetch(`/api/burgers/${id}`, {
          method: 'DELETE',
        }).then((res) => {
          console.log(res);
          console.log(`Deleted burger: ${id}`);

        // Reload the page
        location.reload();
        });
      });
    });
  });
  