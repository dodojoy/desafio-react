type Props = { children: string; className: string };

export default function Title({ children, className }: Props) {
  return <h1 className={className}>{children}</h1>;
}
