import { HeroSection } from './components/HeroSection';
import { CultureSection } from './components/CultureSection';
import { FoodCarousel } from './components/FoodCarousel';
import { CountryData } from '@/types/country';

// Datos de ejemplo (mover a una función de fetching de datos más adelante)
const argentinaData: CountryData = {
  name: "Argentina",
  slug: "argentina",
  // Asegúrate que estas rutas de imágenes sean correctas y los archivos existan en /public
  heroImageUrl: "/images/argentina/patagonia-hero.jpg",
  flagImageUrl: "/images/argentina/flag-ar.png",
  general: {
    capital: "Buenos Aires",
    population: "45 millones",
    area: "2,780,400 km²",
    continent: "América del Sur",
    languages: ["Español"],
    currency: "Peso Argentino (ARS)",
  },
  culture: {
    historyIntro: "Argentina tiene una rica historia que se extiende desde los pueblos originarios, pasando por la colonización española, hasta su independencia y desarrollo como nación moderna. Es un país de contrastes, con una fuerte influencia europea en su cultura y arquitectura.",
    customs: "El tango, el asado y el fútbol son pasiones argentinas. La gente es generalmente cálida y sociable, y valoran mucho las reuniones familiares y con amigos. El mate es una bebida social fundamental.",
  },
  foods: [
    { id: "1", name: "Asado", description: "La parrillada argentina por excelencia, con diversos cortes de carne vacuna cocinados lentamente a las brasas.", imageUrl: "/images/argentina/asado.jpg" },
    { id: "2", name: "Empanadas", description: "Deliciosos pastelitos horneados o fritos, rellenos tradicionalmente de carne, pollo, humita (maíz) o jamón y queso.", imageUrl: "/images/argentina/empanadas.jpg" },
    { id: "3", name: "Milanesa a la Napolitana", description: "Carne empanizada cubierta con salsa de tomate, jamón y queso mozzarella, usualmente acompañada de papas fritas.", imageUrl: "/images/argentina/milanesa.jpg" },
    { id: "4", name: "Dulce de Leche", description: "Un manjar dulce hecho a base de leche y azúcar, similar al caramelo, usado en postres y como acompañamiento.", imageUrl: "/images/argentina/dulce-de-leche.jpg" },
  ],
  attractions: [
    { id: "1", name: "Glaciar Perito Moreno", description: "Impresionante glaciar en la Patagonia.", imageUrl: "/images/argentina/perito-moreno.jpg" },
    { id: "2", name: "Cataratas del Iguazú", description: "Una de las maravillas naturales del mundo.", imageUrl: "/images/argentina/iguazu.jpg" },
    { id: "3", name: "Buenos Aires", description: "Capital vibrante, cuna del tango.", imageUrl: "/images/argentina/buenos-aires.jpg" },
  ],
};

async function getCountryData(slug: string): Promise<CountryData | null> {
  if (slug === "argentina") {
    return argentinaData;
  }
  return null;
}

interface CountryPageProps {
  params: { countrySlug: string };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const countryData = await getCountryData(params.countrySlug);

  if (!countryData) {
    return <div className="container mx-auto p-4 text-center">País no encontrado.</div>;
  }

  return (
    <main>
      <HeroSection
        countryName={countryData.name}
        heroImageUrl={countryData.heroImageUrl}
        flagImageUrl={countryData.flagImageUrl}
      />
      <div className="container mx-auto">
        <CultureSection
          historyIntro={countryData.culture.historyIntro}
          customs={countryData.culture.customs}
        />
        <FoodCarousel foods={countryData.foods} />
        {/* Aquí se añadirían más secciones */}
      </div>
    </main>
  );
}
