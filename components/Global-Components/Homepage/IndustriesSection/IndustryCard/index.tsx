import Image from "next/image";

interface Props {
  title: string;
  image: string;
  id: any;
}
const IndustryCard = ({ title, image, id }: Props) => {
  return (
    <div className="w-40 h-40 transition-all duration-200 ease-in-out transform bg-white rounded-lg shadow-md aspect-square shadow-slate-400 hover:scale-110 md:w-48 md:h-48 hover:border hover:border-emerald-300 group hover:bg-zinc-100">
      <div className="flex flex-col items-center justify-center w-full h-full space-y-2">
        <Image
          className="object-center w-12 h-12 group-hover:animate-bounce"
          width={500}
          height={500}
          src={image}
          alt={image}
        />
        <h2 className="text-sm font-semibold text-center lg:text-lg">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default IndustryCard;
