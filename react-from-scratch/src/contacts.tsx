import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import Nullable from "./types/Nullable";
import ContactType from "./types/Contact";

export async function getContacts(query?: string): Promise<ContactType[]> {
  await fakeNetwork(`getContacts:${query}`);

  let contacts: Nullable<ContactType[]> = await localforage.getItem("contacts");
 
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
  await fakeNetwork();

  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };
  let contacts = await getContacts();

  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id?: string) {
  await fakeNetwork(`contact:${id}`);
  let contacts: ContactType[] = await localforage.getItem("contacts") ?? [];
  let contact = contacts.find(contact => contact.id === id);
  return contact ?? null;
}

export async function updateContact(id :string, updates: ContactType) {
  await fakeNetwork();
  let contacts: ContactType[] = await localforage.getItem("contacts") ?? [];
  let contact = contacts.find(contact => contact.id === id);

  if (!contact) throw new Error("No contact found for", {cause: id});
  Object.assign(contact, updates);

  await set(contacts);
  return contact;
}

export async function deleteContact(id: string) {
  let contacts: ContactType[] = await localforage.getItem("contacts") ?? [];
  let index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts: ContactType[]) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: {
  [key: string]: boolean
} = {};

async function fakeNetwork(key?:string) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key as string]) {
    return;
  }

  fakeCache[key as string] = true;

  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}