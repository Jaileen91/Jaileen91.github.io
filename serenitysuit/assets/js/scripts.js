  fetch('assets/room.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const options = data.options;
    const selectElement = document.getElementById('selectOptions');
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.label;
      selectElement.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });


  document.addEventListener('DOMContentLoaded', function() {
    function fetchData() {
      return fetch('assets/data.json')
        .then(response => response.json());
    }
    function saveData(updatedData) {
      fetch('assets/data.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      })
      .then(() => {
        const updatedDataJson =JSON.stringify(updatedData)
        console.log(updatedDataJson);
        document.getElementById('message').textContent = 'Data saved successfully!';
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'Error saving data.';
      });
    }

    function addClient(newClientData) {
      fetchData()
        .then(data => {
          const dataJson =JSON.stringify(data)
          console.log(dataJson);
          data.clients.push(newClientData); 
          saveData(data);
        })
        .catch(error => {
          console.error('Error:', error);
          document.getElementById('message').textContent = 'Error adding client data.';
        });
    }
    document.getElementById('rqstbtn').addEventListener('click', function() {
      const date = document.getElementById('date').value;
      const room = document.getElementById('selectOptions').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
  
      const newClientData = {
        date: date,
        room: room,
        phoneNumber: phoneNumber
      };

      const newClientDataJson =JSON.stringify(newClientData)
      console.log(newClientDataJson);
      addClient(newClientData);
    });
  });