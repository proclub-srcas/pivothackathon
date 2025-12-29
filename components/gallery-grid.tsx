import Image from "next/image"

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
]

export function GalleryGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {images.slice(0, 6).map((img, i) => (
          <div key={i} className="relative w-full aspect-4/3 overflow-hidden">
            <Image
              src={`/Gallery/${img}`}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw,
                     (max-width: 1024px) 33vw,
                     25vw"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-2">
        {images.slice(6).map((img, i) => (
          <div key={i} className="relative w-full aspect-4/3 overflow-hidden">
            <Image
              src={`/Gallery/${img}`}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw,
                     (max-width: 1024px) 33vw,
                     25vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
