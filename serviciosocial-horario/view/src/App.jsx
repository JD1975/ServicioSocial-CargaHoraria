import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css'; // Para estilos personalizados

export default function App() {
  const [files, setFiles] = useState({ siia: null, ch: null });

  const onDrop = useCallback((acceptedFiles, category) => {
    setFiles(prevFiles => ({ ...prevFiles, [category]: acceptedFiles[0] }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, 'siia'),
    accept: '.xls,.xlsx'
  });

  const { getRootProps: getRootPropsCH, getInputProps: getInputPropsCH, isDragActive: isDragActiveCH } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, 'ch'),
    accept: '.xls,.xlsx'
  });

  const handleSubmit = e => {
    e.preventDefault();
    // Manejar la subida de los archivos aquí
    console.log(files);
  };

  return (
    <div className="upload-container">
      <h2>Upload Files</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="dropzone-container">
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the files here ...</p> : <p>SIIA<br />Drag and Drop file or <a href="#">Choose a file</a></p>}
          </div>
          <div {...getRootPropsCH()} className="dropzone">
            <input {...getInputPropsCH()} />
            {isDragActiveCH ? <p>Drop the files here ...</p> : <p>CH<br />Drag and Drop file or <a href="#">Choose a file</a></p>}
          </div>
        </div>

        <div className="upload-details">
          <p>Supported formats: XLS, XLSX</p>
          <p>Maximum size: 25MB</p>
        </div>

        <div className="actions">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="compare-button">Compare</button>
        </div>
      </form>
    </div>
  );
}
