import Button from '../button/Button';

interface FormProps {
  inputs: [{}];
  inputStyle?: string;
}

export default function Form({ inputs, inputStyle }: FormProps) {
  return (
    <form action="">
      {inputs.map()}
      <Button
        text="Send My Message"
        href="#"
        style="py-3 px-6 text-l text-white"
      />
    </form>
  );
}
