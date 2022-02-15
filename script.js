// User Login By Ben

//event listener
document.getElementById("btn").addEventListener("click", user);

// event fucntion
function user(){
    let username = document.getElementById("us").value;
    let password = document.getElementById("pas").value;


// verify login info

if (username === "admin" && password === "1234"){
    alert("LOGIN SUCCESFUL");

} else if (username !== "admin"){
    alert("INVALID USERNAME")
} else if (username === "admin" && password !== "1234"){
    alert("INVALID PASSWORD")
}


}
