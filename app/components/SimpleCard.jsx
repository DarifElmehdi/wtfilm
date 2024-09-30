import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function SimpleCard(props) {
  const { src, name } = props;
  return (
    <div className="m-1 relative w-fit border-4 border-secondary-foreground overflow-hidden hover:border-primary">
      <Image src={src} width={220} height={200} alt={name} />
    </div>
  );
}
