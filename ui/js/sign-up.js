let data = {};

 console.log("got heresirrr!!!")
const submitForm=()=>{
  console.log("got here!!!")
data.firstName = document.getElementById('firstName').value;
data.lastName = document.getElementById('lastName').value;
data.email = document.getElementById('email').value;
data.password = document.getElementById('password').value;
data.confirmPassword = document.getElementById('comfirmPassword').value;
const Url= 'https://stack-o-lite.herokuapp.com/api/v1/auth/signup';
 axios.post(Url, data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    )
.then(response=>{
  console.log(response);
  if(response.data.status== 201){
    window.location.href='dashboard.html'
  }
}).catch(error=>{
  console.log(error);
})
}
