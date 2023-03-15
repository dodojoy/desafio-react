type Props = { src: string; alt: string; className: string };

export default function Image({ src, alt, className }: Props) {
  return <img className={className} src={src} alt={alt} />;
}
