interface FormInputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  label?: string;
  formInputStyle?: string;
}

export default function FormInput({
  type,
  name,
  id,
  placeholder,
  formInputStyle,
}: FormInputProps) {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`${formInputStyle}`}
      />
    </div>
  );
}
