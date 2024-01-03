import Button from '../button/Button';

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
  return (
    <form action="" className={`${formStyle}`}>
      {inputs?.map((input, i) => (
        <input
          key={i}
          type={input.type}
          name={input.name}
          id={input.id}
          placeholder={input.placeholder}
          className={`focus:border-secondary w-full rounded-3xl border-2 border-gray-300 outline-none ${inputStyle}`}
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
        ></textarea>
      ))}

      <Button
        text={`${btnText}`}
        href="#"
        style={`text-center text-white ${btnStyle}`}
      />
    </form>
  );
}
