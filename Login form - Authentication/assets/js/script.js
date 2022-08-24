// Login form

function loginData()
{
let emaillgn,pswlgn;
emaillgn=document.getElementById("emaillgn").value;
pswlgn=document.getElementById("pswlgn").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==emaillgn && v.psw==pswlgn}))
{
  alert("Login Pass");
  window.location.href="index1.html"
}
 else
 {  
    alert('Login Fail');
 }

}

// Registration form

function saveData()
{
let email,psw;
email=document.getElementById("email").value;

psw=document.getElementById("psw").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

user_records.push({
    "email":email,
    "psw":psw
})
localStorage.setItem("users",JSON.stringify(user_records));
}

//


function myFunction()
{
document.getElementById('sign').style.display="block";
document.getElementById('login').style.display="none";
}