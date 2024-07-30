function send_email(){
    let params = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value,
    }

    emailjs.send("service_eh9kmlv", "template_42anjce", params).then(alert("Email Has Been Sent !!"))
}