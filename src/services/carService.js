import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const carsRef = collection(db, "cars");

// CREATE
export const addCar = (data) => addDoc(carsRef, data);

// READ
export const getCars = async () => {
  const snap = await getDocs(carsRef);
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// UPDATE
export const updateCar = (id, data) => updateDoc(doc(db, "cars", id), data);

// DELETE
export const deleteCar = (id) => deleteDoc(doc(db, "cars", id));
