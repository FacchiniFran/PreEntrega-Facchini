// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, addDoc, orderBy } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkY_dS3CvyQwbsgToTt6-X1oA3gAjVdFE",
  authDomain: "entrega-react-facchini.firebaseapp.com",
  projectId: "entrega-react-facchini",
  storageBucket: "entrega-react-facchini.appspot.com",
  messagingSenderId: "731123270244",
  appId: "1:731123270244:web:be9e1a7fd67d67f1a41571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Obtener Producto
export async function getSingleProduct(id) {
  const productRef = doc(db, 'products', id);

  try {
    const productSnapshot = await getDoc(productRef);
    return productSnapshot.data();
  } catch (error) {
    console.error("Error al obtener el documento: ", error);
  }
}

//Obtener Colección de Productos ordenada
export async function getProducts() {
  try {
    const orderedQuery = query(
      collection(db, 'products'),
      orderBy("category")
    );
    const productsSnapshot = await getDocs(orderedQuery);
    if (productsSnapshot.size !== 0) {
      const productsList = productsSnapshot.docs.map((prods) => {
        return {
          id: prods.id,
          ...prods.data(),
        };
      });
      return productsList;
    } else {
      console.log('Coleccion vacía!');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

export async function sendOrder(order) {
  const ordersCollection = collection(db, 'orders');

  try {
    const docRef = await addDoc(ordersCollection, order);
    console.log('Nueva orden generada: ' + docRef.id);
    return docRef.id;
  } catch (error) {
    console.log('Error al agregar el documento: ' + error);
  }
}