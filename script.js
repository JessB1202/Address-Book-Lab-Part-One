class AddressBook {
  constructor (contacts) {
    this.contacts = [{"name": "Tracy", "email": "tracylgarner@aol.com", "phone": "3132737165", "relation": "Mother"}, {"name": "Jordan", "email": "stripsoffire@yahoo.com", "phone": "3136338015", "relation": "Sister"}];
  }

  add(info) {
    this.contacts.push(info);
  }

  deleteAt(index) {
    this.contacts.splice(index,1);
  }

  print() {
    console.log(this.contacts);
  }

  deleteByName(name) {
    for (let i = 0; i < this.contacts.length; i++) {
      for (let key in this.contacts[i]) {
        if (this.contacts[i].name === name) {
          this.contacts.splice(i, 1);
        }
      }
    }
  }
}

class Contact {
  constructor (name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

let contacts = new AddressBook ({});

let answer;

while (answer !== "quit") {

  answer = prompt ("Would you like to add, delete, print a contact, or quit?");

  if (answer === "add") {
    let name = prompt ("Please enter the contact's name.");
    let email = prompt ("Please enter the contact's email address.");
    let phone = prompt ("Please enter the contact's phone number.");
    let relation = prompt ("Please enter your relationship with the contact.")
    let contact = new Contact (name, email, phone, relation);
    contacts.add(contact);
  } else if (answer === "delete") {
    let deleteOption = prompt ("How would you like to delete the contact? By number or by name?");
    if (deleteOption === "number") {
      let deleteNum = prompt ("Please enter the contact's place in the address book that you wish to delete.");
      let deleteIndex = deleteNum - 1;
      contacts.deleteAt(deleteIndex);
      } else {
      let deleteName = prompt ("Please enter the name of the contact you wish to delete.");
      contacts.deleteByName(deleteName);
      }
  } else if (answer === "print") {
    contacts.print();
  }
}

if (answer === "quit") {
    alert ("Have a great day!"); 
}
  
