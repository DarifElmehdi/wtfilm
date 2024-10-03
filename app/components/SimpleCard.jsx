import React from "react";
import Image from "next/image";
export default function SimpleCard(props) {
  const { src, name, main } = props;
  return main ? (
    <div className=" h-96 aspect-[2/3] m-2 relative border-4 border-secondary-foreground overflow-hidden hover:border-primary">
      <Image src={src} fill alt={name} priority />
    </div>
  ) : (
    <div className=" h-44 aspect-[2/3] m-2 relative border-4 border-secondary-foreground overflow-hidden hover:border-primary">
      <Image src={src} fill alt={name} priority />
    </div>
  );
}
