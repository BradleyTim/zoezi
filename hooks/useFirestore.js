import {useState, useEffect} from 'react';
import {appDB} from '../config/firebase-config';

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const subcribe = appDB.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((document) => {
          documents.push({...document.data(), id:document.id});
        });
        setDocs(documents);
      });

    return () => subcribe();
  }, [collection]);

  return {
    docs,
  }
}

export default useFirestore;