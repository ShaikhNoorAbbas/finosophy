'use client';

import { useState } from 'react';

interface Inputs {
  id: string;
  name: string;
  type: string;
  placeholder: string;
}

interface TextAreas {
  id: string;
  name: string;
  cols: number;
  rows: number;
  placeholder: string;
}

interface FormProps {
  formStyle?: string;
  inputContainerStyle?: string;
  inputStyle?: string;
  inputs?: Inputs[];
  textareaStyle?: string;
  textareas?: TextAreas[];
  btnStyle?: string;
  btnText: string;
}

export default function Form({
  formStyle,
  inputStyle,
  inputs,
  textareaStyle,
  textareas,
  btnStyle,
  btnText,
}: FormProps) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={`${formStyle}`}>
      {inputs?.map((input, i) => (
        <input
          key={i}
          type={input.type}
          name={input.name}
          id={input.id}
          placeholder={input.placeholder}
          className={`focus:border-secondary w-full rounded-3xl border-2 border-gray-300 outline-none ${inputStyle}`}
          onChange={handleInputChange}
        />
      ))}

      {textareas?.map((textarea, i) => (
        <textarea
          key={i}
          id={textarea.id}
          name={textarea.name}
          cols={textarea.cols}
          rows={textarea.rows}
          placeholder={textarea.placeholder}
          className={`focus:border-secondary w-full rounded-3xl border-2 border-gray-300 outline-none ${textareaStyle}`}
          onChange={handleInputChange}
        ></textarea>
      ))}

      <button
        type="submit"
        className={`bg-gradient inline-block rounded-full text-center text-white shadow-md ${btnStyle}`}
      >
        {btnText}
      </button>
    </form>
  );
}
