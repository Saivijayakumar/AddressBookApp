let isUpdate = false;
let ContactDetailsObj = {};
window.addEventListener("DOMContentLoaded", (event) => {

  let name = document.querySelector('#name');
  name.addEventListener('input', function () {
    try {
      (new ContactDetails()).fullName = name.value;
      setTextValue(".text-error", "");
    } catch (e) {
      setTextValue(".text-error", e);
    }
  });

  let phonenumber = document.querySelector('#phonenumber');
  phonenumber.addEventListener('input', function () {
    try {
      (new ContactDetails()).phoneNumber = phonenumber.value;
      setTextValue(".number-error", "");
    } catch (e) {
      setTextValue(".number-error", e);
    }
  });

  let zip = document.querySelector('#zip');
  zip.addEventListener('input', function () {
    try {
      (new ContactDetails()).zip = zip.value;
      setTextValue(".zip-error", "");
    } catch (e) {
      setTextValue(".zip-error", e);
    }
  });
  checkForUpdate();
});
const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
}

//For saving
//
const save = (event) => {
  event.preventDefault();
  event.stopPropagation();
  try {
    setContactDetailsObj();
    createAndUpdateStorage();
    resetForm();
    window.location.replace(siteProperties.HomePage);
  }
  catch (e) {
    alert(e);
  }
}
//
const createAndUpdateStorage = () => {
  let ContactList = JSON.parse(localStorage.getItem("ContactList"));
  if (ContactList) {
    let contactData = ContactList.find(x => x._id == ContactDetailsObj._id);
    if (!contactData) {
      ContactList.push(createContactData());
    }
    else {
      const index = ContactList.map(x => x._id).indexOf(contactData._id);
      ContactList.splice(index, 1, createContactData(contactData._id));
    }
  }
  else {
    ContactList = [createContactData()];
  }
  localStorage.setItem("ContactList", JSON.stringify(ContactList));
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}

//Now we are using editcontact details to fill the form
const checkForUpdate = () => {
  isUpdate = localStorage.getItem('editContact') ? true : false;
  if (!isUpdate) return;
  ContactDetailsObj = JSON.parse(localStorage.getItem('editContact'));
  setForm();
}
//It help to fill the details of Form 
const setForm = () => {
  setValue('#name', ContactDetailsObj._fullName);
  setValue('#phonenumber', ContactDetailsObj._phoneNumber);
  setValue('#address', ContactDetailsObj._address);
  setValue('#State', ContactDetailsObj._state);
  setValue('#city', ContactDetailsObj._city);
  setValue('#zip', ContactDetailsObj._zip);
}

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
}
//storeing the data to local storage
const setContactDetailsObj = () => {
  ContactDetailsObj._fullName = getInputValueById('#name');
  ContactDetailsObj._phoneNumber = getInputValueById('#phonenumber');
  ContactDetailsObj._address = getInputValueById('#address');
  ContactDetailsObj._state = getInputValueById('#State');
  ContactDetailsObj._city = getInputValueById('#city');
  ContactDetailsObj._zip = getInputValueById('#zip');
}

const createContactData = (id) => {
  let contactData = new ContactDetails();
  if (!id) contactData.id = createNewContactId();
  else contactData.id = id;
  setContactData(contactData);
  return contactData;
}

const setContactData = (contactData) => {
  try {
    contactData.fullName = ContactDetailsObj._fullName;
  }
  catch (e) {
    setTextValue(".text-error", e);
    throw e;
  }
  contactData.state = ContactDetailsObj._state;
  contactData.city = ContactDetailsObj._city;
  contactData.address = ContactDetailsObj._address;
  try {
    contactData.zip = ContactDetailsObj._zip;
    setTextValue(".zip-error", "");
  }
  catch (e) {
    setTextValue(".zip-error", e);
  }
  try {
    contactData.phoneNumber = ContactDetailsObj._phoneNumber;
    setTextValue(".number-error", "");
  }
  catch (e) {
    setTextValue(".number-error", e);
  }

  alert(contactData.toString());
}

const createNewContactId = () => {
  let contactID = localStorage.getItem("contactID");
  contactID = !contactID ? 1 : (parseInt(contactID) + 1).toString();
  localStorage.setItem("contactID", contactID);
  return contactID;
}

const resetForm = () => {
  setValue('#name', '');
  setValue('#phonenumber', '');
  setValue('#address', '');
  setValue('#city', '');
  setValue('#State', '');
  setTextValue('.text-error', '');
  setTextValue('.number-error', '');
  setTextValue('.zip-error', '');
}