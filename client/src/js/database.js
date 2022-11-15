import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {

  const DB_VAR = await openDB('DB_NAME', 1);

  const TX_VAR = jateDb.transaction('DB_NAME', 'readwrite');

  const STORE_VAR = tx.objectStore('DB_NAME');

  const VAR_NAME = store.put({ id: 1, value: content });

  const result = await request;
  console.log('🚀 - data saved to the database', result.value);
};

export const getDb = async () => {

  const DB_VAR = await openDB('DB_NAME', 1);
  const TX_VAR = jateDb.transaction('DB_NAME', 'readonly');
  const VAR_NAME = store.put({ id: 1, value: content });


  const request = store.get(1);
  const result = await request;
  result
    ? console.log('🚀 - data retrieved from the database', result.value)
    : console.log('🚀 - data not found in the database');
  return result?.value;
};

initdb();
