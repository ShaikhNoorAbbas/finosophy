import Button from '../button/Button';

interface ModalConfig {
  orientation: string;
  iframeSrc: string;
}

interface VideoCardProps {
  style?: string;
  headerStyle: string;
  heading: string;
  videoSrc: string;
  desc: string;
  btnLink?: string;
  btnText: string;
  modalConfig?: ModalConfig;
}

export default function VideoCard({
  style,
  headerStyle,
  heading,
  videoSrc,
  desc,
  btnLink,
  btnText,
  modalConfig,
}: VideoCardProps) {
  return (
    <div className={`overflow-hidden rounded-lg shadow-lg ${style}`}>
      <div className={`flex ${headerStyle}`}>
        <div className="bg-tertiary p-2">
          <h3 className="text-center text-xl font-semibold text-white">
            {heading}
          </h3>
        </div>
        <video src={`${videoSrc}`} loop muted autoPlay></video>
      </div>
      <div className="bg-tertiary-light flex flex-col gap-4 px-4 pb-6 pt-4">
        <p className="flex text-center text-gray-600">{desc}</p>

        {!modalConfig ? (
          <Button
            href={`${btnLink}`}
            text={`${btnText}`}
            style="py-1 px-4 text-lg font-medium bg-secondary text-white self-center"
          />
        ) : (
          <Button
            href="#"
            text={`${btnText}`}
            style="py-1 px-4 text-lg font-medium bg-secondary text-white self-center"
            modalConfig={modalConfig}
          />
        )}
      </div>
    </div>
  );
}
