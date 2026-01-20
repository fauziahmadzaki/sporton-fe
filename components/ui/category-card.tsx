import Image from "next/image";

interface CategoryCardProps {
  name: string;
  image: string;
}

export const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <div className="bg-neutral-100 p-10 flex flex-col justify-center items-center gap-[15px]">
      <Image width={77} height={77} src={image} alt={name} />
      <p className="text-xl text-primary text-center">{name}</p>
    </div>
  );
};
