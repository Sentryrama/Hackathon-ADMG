// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#users').DataTable();
});


const cargarUsuarios = async () => {
      const request = await fetch('api/users', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json'
        }
      })
      const users = await request.json();
      
      console.log(users);

      let listHtml = ''

      users.forEach(user => {
        let dropButton = `<a href="#" onclick="deleteUser(${user.id})" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i> </a>`
        let phone = user.phone ? user.phone : "--"
        let userHtml = `
        <tr>
          <td>${user.id}</td>
          <td>${user.firstName} ${user.lastName}</td>
          <td>${user.email}</td>
          <td>${phone}</td>
          <td>${dropButton}</td> 
        </tr>`
        listHtml+= userHtml
      });


      document.querySelector('#users tbody').outerHTML = listHtml
}

const deleteUser = async (id) => {

  if (!confirm(`Do yuo want to delete the user with the id: ${id}`)) {
    return
  }

  const request = await fetch(`api/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json'
    }
  })

  location.reload()
}