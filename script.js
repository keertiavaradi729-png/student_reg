$(document).ready(function() {

    // Show a message when the user clicks the heading
    $("h1").click(function() {
        $(this).css("color", "#e07b39");
    });

    // Check the form before submitting
    $("#registrationForm").submit(function(event) {

        let phone = $("input[name='phone']").val();

        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            event.preventDefault();
            return;
        }

        alert("Your registration form is being submitted!");
    });

});