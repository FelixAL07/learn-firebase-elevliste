import { db } from "./firebaseconfig.js"
import { getDoc, getDocs, addDoc, collection, setDoc, doc, updateDoc, deleteField, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"



await setDoc(
    doc(db, "elever", "thore"), {
      fornavn: "Rebecca",
      etternavn: "Thomasen",
      telefon: "12345678"
  });
  await setDoc(
    doc(db, "elever", "nilja"), {
      fornavn: "Jakob",
      etternavn: "Nilsen",
      epost: "jakob@nilsen.net"
  });
  await setDoc(
    doc(db, "elever", "moisa"), {
      fornavn: "Isa",
      etternavn: "Mo",
      epost: "isamo@mo.no",
      telefon: "23456789"
  });
  await setDoc(
    doc(db, "elever", "marga"), {
      fornavn: "Gabrielle",
      etternavn: "Martin",
      telefon: "45678901"
  });

  const doc = await getDoc(
    doc(db, "elever", "nilja")
  );
  console.log(
    "Document data:", 
    doc.data()
  );