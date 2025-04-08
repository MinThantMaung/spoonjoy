import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function MealImage({ src, alt }: Props) {
  return (
    <div className="relative w-full lg:w-1/2 aspect-video rounded-xl shadow-lg overflow-hidden">
      <Image src={src} alt={alt} fill className="object-cover"/>
    </div>
  );
}