import * as SecureStore from 'expo-secure-store';

const defaultData = {
  credits: 0,
  streak: 0,
  lives: 5,
  xp: 0,
};

export function updateData(key, value) {
  let data = Number(getData(key));
  data += value;
  saveData(key, value);
}

export function saveData(key, data) {
  SecureStore.setItem(key, data.toString());
}

export function getData(key) {
  let data = SecureStore.getItem(key);
  if (!data) {
    data = defaultData[key];
    saveData(key, data);
    console.log("SADASdASD");
  }
  return data;
}