# Form Validation Project

This is a simple web form project with client-side validation using JavaScript.  
The form collects user details including Full Name, Phone Number, Email, and Resume upload.

![Form Preview](https://github.com/user-attachments/assets/76e1483c-d5bb-468b-84a7-3a4f4f9b7fbe)


## Features

- Validates full name to allow only alphabets and spaces  
- Validates phone number to be exactly 10 digits  
- Validates email format (basic check for '@')  
- Validates resume upload for allowed file types (PDF, DOC, DOCX) and size (max 2MB)  
- Required fields are marked with a red asterisk (*)  
- Alerts users if any validation fails before submission  

## Files

- `index.html` — The main HTML form  
- `styles.css` — Styling for the form  
- `script.js` — JavaScript for form validation and event handling  

## How to use

1. Open `index.html` in your browser.  
2. Fill in the form fields.  
3. Validation occurs on blur and on submit.  
4. Submit button alerts if any required field is missing or invalid.

## Notes

- This project currently only validates inputs on the client side.  
- No backend server is connected to receive or store form data.  
- You can extend this by adding a backend to handle form submissions.


