import Image from "next/image";
import Errorgif from "../../../../public/Drought-amico.svg"

export default function EmptyState() {
  return (
    <div className="w-full col-span-full flex flex-col justify-center items-center py-24">
      <Image src={Errorgif} alt="error-gif" width={200} height={200} />
      <h1 className="text-3xl font-bold">No Meal Found!</h1>
    </div>
  );
}
