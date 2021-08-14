const {listContacts, getContactById, addContact, removeContact} = require('./contacts')
const { program } = require('commander');


program
    .option("-a, --action <type>", "action type")
    .option("-i --id <type>", "contacts id")
    .option("-n --name <type>", 'contact name')
    .option("-e --email <type>", 'contact email')
    .option("-p --phone <type>", 'contact phone')

program.parse(process.argv)

const options = program.opts()


switch (options.action) {
    case "getList":
        listContacts().then(result => console.table(result));
        break;
    case "getById":
        if (options.id) {
            getContactById(+options.id);
            console.log('Контакт найден!')
        }
        else console.log('id не указан');
        break;
    case "add":
        if (options.name && options.email && options.phone) {
            addContact(options.name, options.email, options.phone);
            console.log('Контакт успешно добавлен!')
        }
        else console.log('информация указана не указана или указана не полностью');
        break;
    case "remove":
        if (options.id) {
            removeContact(+options.id)
            console.log('Контакт успешно удален!')
        }
        else console.log('такого контакта не существует!');
        break
    default:
        console.warn('\x1B[31m Unknown action type!');

}

