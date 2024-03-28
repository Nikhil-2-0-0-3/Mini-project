const firebaseConfig = {
  apiKey: "AIzaSyD13Q2KObzuB3IM9LvKgeAaQk6TaSiJzL0",
  authDomain: "localjoli.firebaseapp.com",
  databaseURL: "https://localjoli-default-rtdb.firebaseio.com",
  projectId: "localjoli",
  storageBucket: "localjoli.appspot.com",
  messagingSenderId: "445146514525",
  appId: "1:445146514525:web:fef1706c002414c840b9b4",
};

//password confirmation

document.getElementById("register").addEventListener("submit", (e) => {
  var pass = document.getElementById("password").value;
  var confirmpass = document.getElementById("confirmPassword").value;
  const text = document.getElementById("messege1");
  if (pass != confirmpass && pass !="" && confirmpass!="") {
    text.textContent = "Passwords donot match";
    text.style.color = "red";
    e.preventDefault();
  } else if(pass==confirmpass && pass!="" && confirmpass!=""){
    text.textContent = "Passwords match";
    text.style.color = "green";
  }
});

//preventing null values from entering the database

document.getElementById("register").addEventListener("submit", (e) => {
  var inputs = document.querySelectorAll("input");
  var emptyFields = [];
  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      emptyFields.push(input.getAttribute("name"));
    }
  });

  if (emptyFields.length > 0) {
    e.preventDefault();
    alert("Please fill in the following fields: " + emptyFields.join(", "));
  } 
});
firebase.initializeApp(firebaseConfig);

var userinfoDB = firebase.database().ref("userinfo");

document.getElementById("register").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var fullname = getElementVal("fullName");
  var username = getElementVal("username");
  var phone = getElementVal("phoneNumber");
  var email = getElementVal("email");
  var gender = getElementVal("gender");
  var dob = getElementVal("dob");
  var Jobcategory = getElementVal("Job-category");
  var experience = getElementVal("experience");
  var password = getElementVal("password");

  saveMessages(
    fullname,
    username,
    phone,
    email,
    gender,
    dob,
    Jobcategory,
    experience,
    password
  );
  document.getElementById("register").reset();
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
const saveMessages = (
  fullname,
  username,
  phone,
  email,
  gender,
  dob,
  Jobcategory,
  experience,
  password
) => {
  var newuser = userinfoDB.push();

  newuser.set({
    fullname: fullname,
    username: username,
    phoneNumber: phone,
    email: email,
    gender: gender,
    dob: dob,
    Jobcategory: Jobcategory,
    experience: experience,
    password: password,
  });
};
