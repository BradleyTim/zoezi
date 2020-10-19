import {useState, useEffect} from 'react';
import {appStorage, appDB, timestamp} from '../config/firebase-config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = appStorage.ref(file.name);
    const dbRef = appDB.collection('images');
    storageRef.put(file).on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      dbRef.add({ url, createdAt })
      setUrl(url);
    });

  }, [file]);

  return {
    progress,
    url,
    error,
  }
}

export default useStorage;