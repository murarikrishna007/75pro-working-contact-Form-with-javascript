console.log("krishna murari");

function sendEmail() {

  Email.send({
    Host: "smtp.yourisp.com",
    Username: "murarikrishna0071994@gmail.com",
    Password: 12345,
    To: "krishnamurari673@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
