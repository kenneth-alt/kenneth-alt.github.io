(function () {
    // Initialize EmailJS with your user ID
    emailjs.init("_UyzTNpPZikFOjrvP");
  })();
  
  function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
  
    var nameErrorElement = document.getElementById("name-error");
    var emailErrorElement = document.getElementById("email-error");
    var messageErrorElement = document.getElementById("message-error");
  
    // Clear previous error messages
    nameErrorElement.innerHTML = "";
    emailErrorElement.innerHTML = "";
    messageErrorElement.innerHTML = "";
  
    var isValid = true;
  
    // Perform form validation here
    if (nameInput.value.trim() === "") {
      nameErrorElement.innerHTML = "Please enter your name";
      isValid = false;
    }
  
    if (emailInput.value.trim() === "") {
      emailErrorElement.innerHTML = "Please enter your email";
      isValid = false;
    }
  
    if (messageInput.value.trim() === "") {
      messageErrorElement.innerHTML = "Please enter your message";
      isValid = false;
    }
  
    if (!isValid) {
      return false; // Prevent form submission
    }
  
    // Form is valid, proceed with email sending
    sendEmail();
  
    // Prevent form submission
    return false;
  }
  
  function sendEmail() {
    var params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    var responseMessageElement = document.getElementById("response-message");
    responseMessageElement.innerHTML = ""; // Clear any previous messages
  
    emailjs.send("service_4fd7ty9", "template_ikz5lep", params)
      .then(function (res) {
        responseMessageElement.innerHTML = "Message successfully sent";
        responseMessageElement.className = "success-message";
      })
      .catch(function (error) {
        responseMessageElement.innerHTML = "Error sending email: " + error;
        responseMessageElement.className = "error-message";
      });
  }
  