import React, {useState} from 'react';

const useSubmit = (initialObject, callback) => {
  const [inputs, setInputs] = useState(initialObject);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback(inputs);
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useSubmit;
