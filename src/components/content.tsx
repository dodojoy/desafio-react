import Paragraph from "./paragraph";
import Image from "./image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  children: React.ReactNode[] | string;
  divClassName: string;
  imageClassName: string;
  paragraphClassName: string;
};

export default function Content({
  src,
  alt,
  children,
  divClassName,
  imageClassName,
  paragraphClassName,
}: Props) {
  return (
    <div className={divClassName}>
      <Image src={src} alt={alt} className={imageClassName} />
      <Paragraph className={paragraphClassName}>{children}</Paragraph>
    </div>
  );
}

{
  /* <div className="flex justify-between items-center gap-1.5">
      <Image src={src} alt={alt} className={className} />
      <Paragraph className="text-[var(--color-cyan)] text-xs w-full">
        {children}
      </Paragraph>
    </div> */
}
