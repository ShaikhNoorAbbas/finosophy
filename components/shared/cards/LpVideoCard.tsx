interface LpVideoCardProps {
  src: string;
  testimonial: string;
  author: string;
}
export default function LpVideoCard({
  src,
  testimonial,
  author,
}: LpVideoCardProps) {
  return (
    <>
      <div>
        <video className="rounded-lg shadow-lg" src={src} controls></video>
        <p className="px-2 py-4 text-xl">
          <span>{testimonial} </span>
          <span className="font-bold">{author}</span>
        </p>
      </div>
    </>
  );
}
