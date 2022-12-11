function sendMail(contactForm) {
    emailjs.send("service_ollksq8","template_ila4rm9", {
        "to_name": contactForm.name.value,
        "from_name": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}