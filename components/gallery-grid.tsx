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
  // Define layout patterns for each image (row-span and col-span)
  const layout = [
    { img: "1.jpg", rows: 2, cols: 1 }, // Tall left
    { img: "2.jpg", rows: 1, cols: 1 }, // Small top middle
    { img: "3.jpg", rows: 1, cols: 1 }, // Small top right
    { img: "4.jpg", rows: 1, cols: 1 }, // Small middle
    { img: "5.jpg", rows: 2, cols: 1 }, // Tall middle (increased height)
    { img: "6.jpg", rows: 1, cols: 1 }, // Small middle right
    { img: "7.jpg", rows: 2, cols: 1 }, // Small bottom left
    { img: "8.jpg", rows: 1, cols: 1 }, // Small bottom middle
    { img: "9.jpg", rows: 1, cols: 1 }, // Small bottom
  ]

  return (
    <div className="w-full md:max-w-[80%] mx-auto pt-6">
      <div className="grid grid-cols-3 auto-rows-[100px] md:auto-rows-[250px] gap-1">
        {layout.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg md:rounded-3xl border-4 border-[#3B005E]"
            style={{
              gridRowEnd: `span ${item.rows}`,
              gridColumnEnd: `span ${item.cols}`,
            }}
          >
            <Image
              src={`/Gallery/${item.img}`}
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
