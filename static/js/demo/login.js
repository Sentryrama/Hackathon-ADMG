// Call the dataTables jQuery plugin
$(document).ready(function() {
});


const logIn = async () => {
      let data = {}
      data.email = document.getElementById('email').value
      data.password = document.getElementById('password').value

      let repeatPassword = document.getElementById('repeatPassword').value

      if (repeatPassword != data.password){
          alert('Password do not match')
          return
      }
      const request = await fetch('api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      const users = await request.json();
     
}