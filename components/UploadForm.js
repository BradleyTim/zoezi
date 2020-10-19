import {useState} from 'react';
import ProgressBar from './ProgressBar.js';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const uploadHandler = (e) => {
    const selected = e.target.files[0];
    const types = ['image/png', 'image/jpeg'];
    if(selected && types.includes(selected.type)) {
      console.log(selected);
      setFile(selected)
      setError('');
    } else {
      setFile(null);
      setError('Please select a png or jpeg file type');
    }
  }

  return (
    <section>
      <form>
        <input type="file" onChange={uploadHandler}/>
        <button>Upload</button>
      </form>
      <div>
        {error && <p>{error}</p>}
        {file && <p>{file.name}</p>}
        {file && <ProgressBar file={file} setFile={setFile}/>}
      </div>
    </section>
  )
}

export default UploadForm;