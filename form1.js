function myFunction() {
    var x,y,z,l,c,g1,g2;
   
    
    x = document.getElementById("uname").value;
    y =document.getElementById('pwd').value;
    z =document.getElementById('emi').value;
    l =document.getElementById('loc').value;
    c =document.getElementById('com').value;
    g1 =document.getElementById('g1');
    g2 =document.getElementById('g2');
    
    
    var validation = 0;
//username
    if(x==""){
        validation = -1;
        document.getElementById('demo').innerHTML="please enter username";
    }
    else{
        document.getElementById('demo').innerHTML="";  
    }
//password
    if(y==""){
        validation = -1;
        document.getElementById('demo0').innerHTML="please enter password";
    }
    else{
        document.getElementById('demo0').innerHTML="";
    }

//email
if(z==""){
    validation = -1;
    document.getElementById('demo3').innerHTML="please enter email";
}
else{
    document.getElementById('demo3').innerHTML="";
}

//location
if(l==""){
    validation = -1;
    document.getElementById('demo1').innerHTML="please enter location";
}
else{
    document.getElementById('demo1').innerHTML="";
}

//company
if(c==""){
    validation = -1;
    document.getElementById('demo2').innerHTML="please enter company";
}
else{
    document.getElementById('demo2').innerHTML="";
}

//gender




//  if(function check() {
//     document.getElementById("gender_male").checked = true;
    
    // {
    //  user.gender=g1.value;
    //  console.log(g1);

    var user={}
    if(g1.checked){
        user.gender=g1.value;
        
     }
   else if(g2.checked) {
     user.gender=g2.value;

   }
   console.log(user.gender)
   


//storiong the data in local storage

var users=[];
if(localStorage.a_users){
 users = JSON.parse(localStorage.a_users);
 displayUsers(users);
}
function displayUsers(users){
console.log(users);
}
// document.getElementById('btn').addEventListener('click',function(){
 user.username=x;
 user.password=y;
 user.email=z;
 user.location=l;
user.company=c
    
    

 users.push(user);
 localStorage.a_users = JSON.stringify(users);



 
 console.log(localStorage.a_users);
 if(localStorage.a_users)
 {
 
 var len =users.length;
 html = '';
 html = '<table border="1" style="border-collapse:collapse;" id="result1"><tr><td>Username</td><td>Password</td><td>Email</td><td>Location</td><td>Company</td><td>Gender</td></tr>';
 for (var i = 0; i < len; i++) {
    
 html += '<tr>';
 html += '<td>' + users[i].username + '</td>';
 html += '<td>' + users[i].password + '</td>';
 html += '<td>' + users[i].email+ '</td>';
 html += '<td>' + users[i].location + '</td>';
 html += '<td>' + users[i].company+ '</td>';
 html += '<td>' + users[i].gender + '</td>';
 html += '</tr>';
 }
 document.getElementById('result').insertAdjacentHTML('afterend', html);
 }


}