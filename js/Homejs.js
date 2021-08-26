let ContactDetailsList;
window.addEventListener('DOMContentLoaded', (event) => {
    ContactDetailsList = getEmployeePayrollDataFromLocalStorage();
    document.querySelector(".person-count").textContent = ContactDetailsList.length;
    createInnerHtml();
    localStorage.removeItem("editContact");
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
                    <img id="${contactData._fullName}" onclick="remove(this)" alt="delete" src="../assests/homepage/delete-black-18dp.svg">
                    <img id="${contactData._fullName}" onclick="update(this)" alt="Update" src="../assests/homepage/create-black-18dp.svg">
                </td>
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

//remove person from Address Book
const remove = (node)=>{
    let personData = ContactDetailsList.find(x=>x._fullName == node.id);
    if(!personData) return;
    const index = ContactDetailsList.map(x=>x._fullName).indexOf(personData._fullName);
    ContactDetailsList.splice(index,1);
    localStorage.setItem('ContactList',JSON.stringify(ContactDetailsList));
    document.querySelector(".person-count").textContent = ContactDetailsList.length;
    createInnerHtml();
}
//when we click on edit, first we have to store it in one obj
const update = (node)=>{
    let personData = ContactDetailsList.find(x=>x._fullName == node.id);
    if(!personData) return;
    localStorage.setItem('editContact',JSON.stringify(personData));
    window.location.replace(siteProperties.FormPage);
}