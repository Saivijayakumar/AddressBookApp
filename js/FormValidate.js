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
});
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

//For saving

const save=()=>
    {
      try
      {
        let singleContactDetails=RetriveData();
        createAndUpdateStorage(singleContactDetails);
      }
      catch(e)
      {
        return;
      }
    }

const RetriveData=() =>
    {
      let singleContactDetails=new ContactDetails();
      try
      {
        singleContactDetails.fullName=getInputValueById("#name");
      }
      catch(e)
      {
        setTextValue(".text-error",e);
        throw e;
      }
 
      singleContactDetails.state=getInputValueById('#State');
      singleContactDetails.city=getInputValueById('#city');
      singleContactDetails.address=getInputValueById("#address");
      try
      {
        singleContactDetails.zip=getInputValueById('#zip');
        setTextValue(".zip-error","");
      }
      catch(e)
      {
        setTextValue(".zip-error",e);
      }
      try
      {
        singleContactDetails.phoneNumber=getInputValueById('#phonenumber');
        setTextValue(".number-error","");
      }
      catch(e)
      {
        setTextValue(".number-error",e);
      }
      
      alert(singleContactDetails.toString());
      return singleContactDetails;
    }
    
    function createAndUpdateStorage(singleContactDetails)
    {
    let ContactList=JSON.parse(localStorage.getItem("ContactList"));
    if(ContactList!=undefined)
    {
       ContactList.push(singleContactDetails);
    }
    else{
       ContactList=[singleContactDetails];
    }
    alert(ContactList.toString());
    localStorage.setItem("ContactList",JSON.stringify(ContactList));
    }

    const getInputValueById=(id) =>
    {
      let value=document.querySelector(id).value;
      return value;
    }