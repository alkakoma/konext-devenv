import { getUsers } from './api/userApi';

//Populate table with users via API calls
getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById('users').innerHtml = usersBody;
});