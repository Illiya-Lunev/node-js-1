const { uuid } = require("uuidv4");
const path = require("path");
const fs = require("fs");

const contactsPath = path.resolve("./db/contacts.json");

// Добавить функцию fs

function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
