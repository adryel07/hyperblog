import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export function Card({ title, description, imageUrl, link }: CardProps) {
  const content = (
    <>
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <a href={link} className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {content}
      </a>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {content}
    </div>
  );
}
