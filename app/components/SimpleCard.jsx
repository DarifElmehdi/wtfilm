import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function SimpleCard(props) {
  const { src, name, main } = props;
  return main ? (
    <div className=" w-60 h-80 m-2 relative border-4 border-secondary-foreground overflow-hidden hover:border-primary">
      <Image src={src} fill alt={name} />
    </div>
  ) : (
    <div className=" w-28 h-44 m-2 relative border-4 border-secondary-foreground overflow-hidden hover:border-primary">
      <Image src={src} fill alt={name} />
    </div>
  );
}
