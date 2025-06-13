const full_name=document.getElementById("full-name");
const phone=document.getElementById("phone");
const email=document.getElementById("email");
const resume=document.getElementById("resume").files[0];


// check name entered--------------------
function checkfull_name(nameValue){
    const regex=/^[A-Za-z ]+$/;
    return regex.test(nameValue);
}
// functioncalled when clicked away from name input area
full_name.addEventListener('blur', function () {
    const nameValue = full_name.value.trim();
    if (!checkfull_name(nameValue)) {
      alert("Please enter a valid name (letters and spaces only).");
    }
});

// check phone number----------------
function checkphone(phoneValue){
    const regex=/^\d{10}$/;
    return regex.test(phoneValue);
}

phone.addEventListener('blur', function () {
    const phoneValue = phone.value.trim();
    if (!checkphone(phoneValue)) {
      alert("Please enter a valid phone number.");
    }
});

// check email ------------------
function checkemail(emailValue){
    const regex=/@/;
    return regex.test(emailValue);
}

email.addEventListener('blur', function (){
    const emailValue=email.value.trim();
    if(!checkemail(emailValue)){
        alert("Please enter a valid email");
    }
});
// check resume-----------------------
const resumeInput = document.getElementById("resume");

resumeInput.addEventListener('change', function () {
  const file = resumeInput.files[0];

  if (!file) {
    alert("Please upload your resume.");
    return;
  }
//   file type-----
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const maxSize = 2 * 1024 * 1024; // 2 MB

  if (!allowedTypes.includes(file.type)) {
    alert("Please upload a PDF or Word document.");
    resumeInput.value = ""; // clear the input
    return;
  }
// file size--------
  if (file.size > maxSize) {
    alert("Resume must be under 2 MB.");
    resumeInput.value = ""; // clear the input
    return;
  }
});

const form=document.querySelector("form");

// submit button in form-------
form.addEventListener("submit", function(e){
if(!full_name || !email ||!resume){
    alert("Please fill in all required fields.");
    e.preventDefault();
    return;
}
})


