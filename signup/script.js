
//import{createUserWithEmailAndPassword}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js "
//import { getAuth } from "/firebase/auth";

//import firebase from "/firebase/compat/app";
//import "/firebase/compat/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyD13Q2KObzuB3IM9LvKgeAaQk6TaSiJzL0",
  authDomain: "localjoli.firebaseapp.com",
  databaseURL: "https://localjoli-default-rtdb.firebaseio.com",
  projectId: "localjoli",
  storageBucket: "localjoli.appspot.com",
  messagingSenderId: "445146514525",
  appId: "1:445146514525:web:fef1706c002414c840b9b4",
};

//const auth=getAuth(app);


function passConfirm(pass,confirmpass)
{
  var text=document.getElementById("messege1");
  if(pass!=confirmpass && pass!="" && confirmpass!="")
  {
    text.textContent="passwords donot match";
    text.style.color="red";
    return false;
  }else if(pass==confirmpass && pass!="" && confirmpass!="")
  {
    //text.textContent = "Passwords match";
    //text.style.color = "green";
    return true;
  }
}


function emptyFields(e)
{
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
    return false;
  } 
  else return true;

}



const app=firebase.initializeApp(firebaseConfig);

var userinfoDB = firebase.database().ref("userinfo");

//event listener

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
  var confirmpass=getElementVal("confirmPassword");

  //registerUser(e);
  var flag=emptyFields(e);
  if(flag)
  var flag2=passConfirm(password,confirmpass);
  if(flag && flag2)
  saveMessages(fullname,username,phone,email,gender, dob,Jobcategory,experience,password);
  //document.getElementById("register").reset();
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

//registering user with email and password
/*
const registerUser=e=>
{ 
  var email = getElementVal("email");
  var password = getElementVal("password");
  createUserWithEmailAndPassword(auth,email,password);   
}*/

const saveMessages = (
  fullname,
  username,
  phone,
  email,
  gender,
  dob,
  Jobcategory,
  experience,
  password) => {
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
  document.getElementById("register").reset();
  const text=document.getElementById("messege1");
  text.textContent="";
};
