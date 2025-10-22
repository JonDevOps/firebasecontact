//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    console.log(name, company, email, phone, message);
}



//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}