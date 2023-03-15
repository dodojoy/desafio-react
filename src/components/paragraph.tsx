type Props = { children: string; className: string };

export default function Paragraph({ children, className }: Props) {
  return <p className={className}>{children}</p>;
}
