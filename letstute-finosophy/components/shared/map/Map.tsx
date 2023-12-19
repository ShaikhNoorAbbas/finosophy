export default function MapComponent() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7971471604724!2d72.83966507515379!3d19.02865835345719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced27a1e32a5%3A0x23f485b803444872!2sLetsTute!5e0!3m2!1sen!2sin!4v1702898602633!5m2!1sen!2sin"
        width="600"
        height="600"
        style={{ border: '0' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-3xl shadow-xl"
      ></iframe>
    </div>
  );
}
