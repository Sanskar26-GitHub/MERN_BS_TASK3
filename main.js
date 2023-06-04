// Function to validate the form
function validateForm() {
    // Get the form inputs
    var firstName = document.forms["contact_form"]["first_name"].value;
    var lastName = document.forms["contact_form"]["last_name"].value;
    var email = document.forms["contact_form"]["email"].value;
  
    // Perform validation
    if (firstName == "") {
      showError("first_name", "First Name is required");
      return false;
    }
  
    if (lastName == "") {
      showError("last_name", "Last Name is required");
      return false;
    }
  
    if (email == "") {
      showError("email", "Email is required");
      return false;
    }
  
    // Validate email format
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      showError("email", "Please enter a valid email address");
      return false;
    }
  
    // Validation passed
    return true;
  }
  
  // Function to display error messages
  function showError(fieldId, errorMessage) {
    var errorField = document.getElementById(fieldId + "_error");
    errorField.innerText = errorMessage;
    errorField.style.display = "block";
  }
  
  // Event listener for form submission
  var form = document.getElementById("contact_form");
  form.addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
  