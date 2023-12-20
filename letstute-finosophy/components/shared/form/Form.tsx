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
  style?: string;
}

interface FormProps {
  formStyle?: string;
  inputContainerStyle?: string;
  inputs: Inputs[];
  inputStyle?: string;
  textareas: TextAreas[];
  btnStyle?: string;
}

export default function Form({
  formStyle,
  inputs,
  inputStyle,
  textareas,
  btnStyle,
}: FormProps) {
  return (
    <form action="" className={`${formStyle}`}>
      {inputs.map((input, i) => (
        <input
          key={i}
          type={input.type}
          name={input.name}
          id={input.id}
          placeholder={input.placeholder}
          className={`focus:border-secondary text-bold w-full rounded-3xl border-2 border-gray-300 px-4 py-2 outline-none ${inputStyle}`}
        />
      ))}

      {textareas.map((textarea, i) => (
        <textarea
          key={i}
          id={textarea.id}
          name={textarea.name}
          cols={textarea.cols}
          rows={textarea.rows}
          placeholder={textarea.placeholder}
          className={`focus:border-secondary text-bold w-full rounded-3xl border-2 border-gray-300 px-4 py-2 outline-none ${textarea.style}`}
        ></textarea>
      ))}

      <Button
        text="Send My Message"
        href="#"
        style={`px-6 py-3 text-lg text-center text-white ${btnStyle}`}
      />
    </form>
  );
}
