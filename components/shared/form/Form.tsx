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
  btnStyle?: any;
  btnText: any;
  spreadsheetId: string;
  sheetName: string;
}

export default function Form({
  formStyle,
  inputStyle,
  inputs,
  textareaStyle,
  textareas,
  btnStyle,
  btnText,
  spreadsheetId,
  sheetName,
}: FormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const currentDate = new Date();
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const formattedDate = `${currentDate.getDate()}-${
      monthNames[currentDate.getMonth()]
    }-${currentDate.getFullYear()}`;

    formData.append('date', formattedDate);

    const data = Object.fromEntries(formData.entries());

    setIsLoading(true);

    await fetch('api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    setIsLoading(false);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={`${formStyle}`}>
      <input
        type="text"
        name="spreadsheetId"
        value={spreadsheetId}
        hidden
        readOnly
      />
      <input type="text" name="sheetName" value={sheetName} hidden readOnly />
      {inputs?.map((input, i) => (
        <input
          key={i}
          type={input.type}
          name={input.name}
          id={input.id}
          placeholder={input.placeholder}
          className={`w-full rounded-3xl border-2 border-gray-300 outline-none focus:border-secondary ${inputStyle}`}
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
          className={`w-full rounded-3xl border-2 border-gray-300 outline-none focus:border-secondary ${textareaStyle}`}
        ></textarea>
      ))}

      <button
        className={`bg-gradient inline-block rounded-full text-center text-white shadow-md ${btnStyle}`}
      >
        {isLoading ? 'Sending...' : btnText}
      </button>
    </form>
  );
}
