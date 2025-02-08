import Image from "next/image"

export default function Images() {
    return (
        <div>
            <Image src="/images.png" alt="img" width={600} height={400} className="w-full"/>
        </div>
    )
}