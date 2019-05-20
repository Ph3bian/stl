let data = {};
const errorMessage = document.getElementById('error-message')
const submitForm=()=>{
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
  if(response.data.status== 'success'){
    localStorage.setItem('token', response.data.data.token)
    window.location='dashboard.html'
  }
}).catch(error=>{
errorMessage.innerText=error.message;
})
}
