'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

const imgs = [
    {
        alt: "...",
        src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    },
    {
        alt: "...",
        src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    },
    {
        alt: "...",
        src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    },
    {
        alt: "...",
        src: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    },
    {
        alt: "...",
        src: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
    }
]

export default function DefaultCarousel() {
    return (
        <Carousel>
            {imgs.map((img, idx) => (
                <Image src={img.src} alt={img.alt} width={0} height={0} sizes="100vw" key={idx} />
            ))}
        </Carousel>
    )
}


