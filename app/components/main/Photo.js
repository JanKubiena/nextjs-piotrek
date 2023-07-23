import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-55">
      {/* <Image
        className="object-cover aspect-square"
        src="/piotrwozniak.webp"
        priority={true}
        width={220}
        height={220}
        quality={75}
        alt="Picture of the author"
      /> */}
      <img className="object-cover aspect-square" src="/piotrwozniak.webp" />
    </div>
  );
}
