'use client';

import { handleFormSubmit } from '@/app/actions';
import { useFormStatus } from 'react-dom';

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

interface SubmitButtonProps {
  btnStyle: string;
  btnText: string;
}

function SubmitButton({ btnStyle, btnText }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`bg-gradient inline-block rounded-full text-center text-white shadow-md ${btnStyle}`}
    >
      {pending ? 'Submitting...' : btnText}
    </button>
  );
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
  return (
    <form action={handleFormSubmit} className={`${formStyle}`}>
      <input type="text" name="spreadsheetId" value={spreadsheetId} hidden />
      <input type="text" name="sheetName" value={sheetName} hidden />
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

      <SubmitButton btnStyle={btnStyle} btnText={btnText} />
    </form>
  );
}
