export default function FormTextArea() {
  return (
    <textarea
      name="message"
      id="message"
      cols={30}
      rows={6}
      placeholder="Message"
      className="focus:border-primary text-bold mb-5 w-full rounded-3xl border-2 border-gray-300 p-2 shadow-md outline-none"
    ></textarea>
  );
}
