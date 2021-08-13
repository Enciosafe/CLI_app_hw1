const path = require('path')
const fs = require('fs/promises')

const contactsPath = path.join(__dirname, 'db', "contacts.json")


const listContacts = async () => {
    try {
        const data = await fs.readFile(contactsPath)
        return JSON.parse(data)

    }
    catch (error) {
        console.log(error.message)
    }
}





const  getContactById = async (contactId) => {
    try {
        const contacts = await listContacts();
            const selectContact = contacts.find(item => item.id === contactId);
            console.log(selectContact)
            if(!selectContact){
                console.log(new Error(`Contact with id=${contactId} not found`));
            }
    }
        catch(error){
            throw error;
        }
}




const updateContact = async (contacts) => {
    const contactsString = JSON.stringify(contacts);
    await fs.writeFile(contactsPath, contactsString);
}

const removeContact = async (contactId) => {
     try{
         const contacts = await listContacts();
         const index = contacts.findIndex(item => item.id === contactId)
         if(index === -1){
             console.log(new Error(`Product with id=${contactId} not found`))
         }
         const newContacts = contacts.filter(item => item.id !== contactId)
         await updateContact(newContacts);
         console.log(contacts[index]);
     }
     catch(error){
         throw error;
     }
}



const addContact = async (name, email, phone) => {
    try {
        const contacts = await listContacts();
        const newContact = {
            id: contacts.length + 1,
            name: name,
            email: email,
            phone: phone,
        };
        const newContacts = [...contacts, newContact]
        await updateContact(newContacts);
        console.log(newContact)
        return newContact
    }
    catch(error){
        throw error;
    }
}



module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}