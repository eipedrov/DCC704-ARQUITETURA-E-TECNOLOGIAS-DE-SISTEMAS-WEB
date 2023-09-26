import Link from "next/link";

export default function ButtonHeader({icone, nome, url} : any){
    return(
        <Link href={url}>
        <div className="flex flex-col justify-center items-center rounded-md border-gray-500 py-4 px-2 hover:bg-gray-100">
            <span>{icone}</span>
            <p>{nome}</p>
        </div>
        </Link>
    )
}