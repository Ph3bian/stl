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
  console.log(response);
  if(response.data.status== 200){
    window.location.href='dashboard.html'
  }
}).catch(error=>{
  console.log(error);
})
}
