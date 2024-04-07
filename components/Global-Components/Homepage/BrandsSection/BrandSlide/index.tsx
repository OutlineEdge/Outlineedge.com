import Image from "next/image";

interface Props {
  data: any[];
}
const BrandSlide = ({ data }: Props) => {
  return (
    <div className="rounded-lg">
      <div className="grid grid-cols-2 gap-1 p-4 divide-gray-400 md:grid-cols-4">
        {data.map((brand: any, index: number) => (
          <div
            className="flex flex-col items-center p-4 space-y-4 "
            key={index}
          >
            <Image
              src={brand.logo}
              alt={brand.logo}
              width={500}
              height={500}
              className="w-8 h-8 lg:h-10 lg:w-10"
            />
            <h1 className="text-sm font-semibold md:text-xl">{brand.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlide;
