import { Card } from '@/components/ui/Card'; // Usando el alias @/*
import { FoodItem } from '@/types/country';

interface FoodCarouselProps {
  foods: FoodItem[];
}

export function FoodCarousel({ foods }: FoodCarouselProps) {
  if (!foods || foods.length === 0) return null;

  return (
    <section className="py-8 px-4 md:px-8" id="food">
      <h2 className="text-3xl font-semibold text-brown-dark mb-6">Sabores Típicos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods.map(food => (
          <Card
            key={food.id}
            title={food.name}
            description={food.description}
            imageUrl={food.imageUrl} // Asegúrate que estas imágenes existan o usa placeholders
          />
        ))}
      </div>
      {/* Para un carrusel real, se necesitaría una librería como Swiper.js o Embla Carousel */}
      {/* <p className="mt-4 text-sm text-gray-500">Nota: Implementar un carrusel interactivo aquí.</p> */}
    </section>
  );
}
