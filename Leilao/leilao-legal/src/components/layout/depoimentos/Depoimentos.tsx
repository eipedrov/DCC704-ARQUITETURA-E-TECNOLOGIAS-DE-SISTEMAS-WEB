import Image from "next/image";


const imgs = [
    {
        alt: "...",
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
    },
    {
        alt: "...",
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    },
    {
        alt: "...",
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    },
    {
        alt: "...",
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    },
    {
        alt: "...",
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    },
    {
        alt: "...",
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    }
]

export default function Depoimentos() {
    return (
        <div className="grid gap-4">
            {imgs.map((img, idx) => (
                <Image src={img.src} alt={img.alt} width={0} height={0} sizes="100vw" key={idx} />
            ))}
            <div>
                {imgs.map((img, idx) => (
                    <Image src={img.src} alt={img.alt} width={0} height={0} sizes="100vw" key={idx} />
                ))}
            </div>
        </div>


    )
}
