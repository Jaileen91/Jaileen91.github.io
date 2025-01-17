//  room options
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

// request quote
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

  //slide image
const slideImages = document.querySelectorAll('.slide-image');
const imageContainer = document.querySelector('.image-container');

let currentPosition = 0;
const slideWidth = slideImages[0].clientWidth;

function slideToLeft() {
  currentPosition -= slideWidth;
  imageContainer.style.transition = 'transform 10s linear';
  imageContainer.style.transform = `translateX(${currentPosition}px)`;

  if (currentPosition < -slideWidth * (slideImages.length - 1)) {
    setTimeout(() => {
      currentPosition = 0;
      imageContainer.style.transition = 'none';
      imageContainer.style.transform = `translateX(${currentPosition}px)`;
    }, 10000);
  }
}

function slideToRight() {
  currentPosition += slideWidth;
  imageContainer.style.transition = 'transform 10s linear';
  imageContainer.style.transform = `translateX(${currentPosition}px)`;

  if (currentPosition > 0) {
    setTimeout(() => {
      currentPosition = -slideWidth * (slideImages.length - 1);
      imageContainer.style.transition = 'none'; 
      imageContainer.style.transform = `translateX(${currentPosition}px)`;
    }, 2000);
  }
}
setInterval(slideToLeft, 2000);

//booking form
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  var formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    contact:document.getElementById("contact").value
  };

  const displayVal = JSON.stringify(formData);
  console.log(displayVal);
  localStorage.setItem("formData", JSON.stringify(formData));

  alert("Form data saved successfully!");
});