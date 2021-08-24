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
            setTextValue(".-zip-error", "");
        } catch (e) {
            setTextValue(".zip-error", e);
        }
    });
});
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}