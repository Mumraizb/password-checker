
function check(){
    let pass = document.getElementById("input").value;
    if(pass==""){
       let empty = "Please Enter a password!"
       document.getElementById("empty").innerText= empty;

    }
     else if(pass =="babar123"){
     let result= "Your password is correct!!"
     document.getElementById("result").innerText = result;
     document.getElementById("empty").style.display= "none";
     }else{
         let result1= "Your password is incorrect!!"
         document.getElementById("result").innerText= result1;
         document.getElementById("empty").style.display= "none";

     }

}