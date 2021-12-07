const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs').promises;
const { stringify } = require('querystring');

const contactsPath = path.resolve('./db/contacts.json');

// Добавить функцию fs для чтения

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    console.table(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const result = await listContacts();
    const contactSelected = result.find(item => item.id === String(contactId));

    console.table(contactSelected);

    return contactSelected;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const result = await listContacts();
    const newContact = result.filter(
      contact => contact.id !== String(contactId),
    );
    await fs.writeFile(contactsPath, JSON.stringify(newContact));

    return console.table(newContact);
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  const newContact = { id: uuid(), name, email, phone };
  try {
    const contacts = await fs.readFile(contactsPath, 'utf8');
    const contactsParsed = JSON.parse(contacts);
    const newContactList = [...contactsParsed, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(newContactList), 'utf8');
    return console.table(newContactList);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
