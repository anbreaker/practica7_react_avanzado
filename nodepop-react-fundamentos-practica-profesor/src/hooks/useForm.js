import {useState} from 'react';

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (ev) => {
    const {name, type, value, checked} = ev.target;
    setForm({...form, [name]: type === 'checkbox' ? checked : value});
  };

  return [form, handleChange];
};
