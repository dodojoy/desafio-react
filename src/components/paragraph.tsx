type Props = { children: React.ReactNode[] | string; className: string };

export default function Paragraph({ children, className }: Props) {
  return <p className={className}>{children}</p>;
}
