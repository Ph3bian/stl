let data = {};
const submitForm=()=>{
data.email = document.getElementById('email').value;
data.password = document.getElementById('password').value;
const Url= 'https://stack-o-lite.herokuapp.com/api/v1/auth/login';
 axios.post(Url, data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    )
.then(response=>{
  if(response.data.status== 'success'){
     localStorage.setItem('token', response.data.data.token)
     window.location='dashboard.html';
  }
}).catch(error=>{
  console.log(error, "heree", error.data, error.status);
  const errorMessage="Invalid email or password";
  window.alert(errorMessage);
})
}
