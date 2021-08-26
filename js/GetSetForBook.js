class ContactDetails
{
    get id()
    {
        return this._id;
    }
    set id(id)
    {
        this._id = id;
    }
    get fullName()
    {
        return this._fullName;
    }
    set fullName(fullName)
    {
       let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
       if(nameRegex.test(fullName))
       {
        this._fullName=fullName;
       }
       else
       {
         throw 'Name is Incorrect';
       }

    }

    get phoneNumber()
    {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber)
    {
        let phoneRegex=RegExp('^[0-9]{10}$');
        if(phoneRegex.test(phoneNumber))
        {
            this._phoneNumber=phoneNumber;
        }
        else
        {
          throw 'Phone Number is Incorrect';
        }
    }

    get zip()
    {
        return this._zip;
    }
    set zip(zip)
    {
        {
            let zipRegex=RegExp('^[0-9]{4}$');
            if(zipRegex.test(zip))
            {
                this._zip=zip;
            }
            else
            {
              throw 'zipCode is Incorrect';
            }
        }

    }

    get address()
    {
        return this._address;
    }
    set address(address)
    {
        this._address=address;
    }
    
    get city()
    {
        return this._city;
    }
    set city(city)
    {
        this._city=city;
    }

    get state()
    {
        return this._state;
    }
    set state(state)
    {
        this._state=state;
    }

    toString(){
        return (`ID : ${this.id} | Name : ${this.fullName} | Phone Number : ${this.phoneNumber} | Address : ${this.address} | City : ${this.city} | State : ${this.state} | Zip : ${this.zip}`);
    }
}
