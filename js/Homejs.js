let ContactDetailsList;
window.addEventListener('DOMContentLoaded', (event) => {
    ContactDetailsList = getEmployeePayrollDataFromLocalStorage();
    document.querySelector(".emp-count").textContent = ContactDetailsList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromLocalStorage = () => {
    return localStorage.getItem('ContactList') ? JSON.parse(localStorage.getItem('ContactList')) : [];
}

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th>Fullname</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th></th>";
    if (ContactDetailsList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const contactData of ContactDetailsList) {
        innerHtml = `${innerHtml}
        <tr>
                <td>${contactData._fullName}</td>
                <td>${contactData._address}</td>
                <td>${contactData._city}</td>
                <td>${contactData._state}</td>
                <td>${contactData._zip}</td>
                <td>${contactData._phoneNumber}</td>
                <td>
                    <img id="1" onclick="remove(this)" alt="delete" src="../assests/homepage/delete-black-18dp.svg">
                    <img id="1" onclick="update(this)" alt="Update" src="../assests/homepage/create-black-18dp.svg">
                </td>
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}
