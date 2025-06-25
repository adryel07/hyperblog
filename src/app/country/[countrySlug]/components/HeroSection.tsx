import Image from 'next/image';

interface HeroSectionProps {
  countryName: string;
  heroImageUrl: string;
  flagImageUrl: string;
}

export function HeroSection({ countryName, heroImageUrl, flagImageUrl }: HeroSectionProps) {
  return (
    <div className="relative h-[400px] md:h-[500px]">
      {/* Asegúrate de que las imágenes existan en la carpeta public o usa URLs absolutas */}
      <Image src={heroImageUrl} alt={`Paisaje de ${countryName}`} layout="fill" objectFit="cover" priority />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4">
        <Image src={flagImageUrl} alt={`Bandera de ${countryName}`} width={80} height={50} className="mb-4 border-2 border-white rounded" />
        <h1 className="text-4xl md:text-6xl font-bold text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          {countryName}
        </h1>
      </div>
    </div>
  );
}
