// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const changeDevouredState = document.querySelectorAll('.devour-burger');
  
    // Set up the event listener for the devour button
    if (changeDevouredState) {
        changeDevouredState.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          
          // hardcoding devoured state because We have not specified the devoured condtion.
          // on devour button click state need to be changed and we are not revorting back to undovoured state.
          const toDevour = {
            devoured : true,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(toDevour),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed devour to: devoured`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurgerBtn = document.getElementById('create-form');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        if(document.getElementById('burger').value.trim() === ''){
          // return statement if input value is empty.
            return;
        };
        // Grabs the value of the textarea that goes by the name,
        const newBurger = {
          name: document.getElementById('burger').value.trim(),
          // providing devoured state false so that user can devour later with the devour button
          devoured : false,
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
          document.getElementById('burger').value = '';
  
          // Reload the page so the user can see the new entry
          console.log('Created a new burger!');
          location.reload();
        });
      });
    }



    // DELETE
  const deleteBurgerBtns = document.querySelectorAll('.delete-burger');

  // Setting up the event listeners for each deleteb-burger button
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
  