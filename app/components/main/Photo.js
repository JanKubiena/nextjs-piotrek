import Image from "next/image";

export default function Photo() {
    return (
        <div className="h-55 w-full">
            <Image
                className="aspect-square object-cover"
                src="/piotrwozniak.webp"
                priority={true}
                width={220}
                height={220}
                quality={75}
                alt="Picture of the author"
            />
        </div>
    );
}
