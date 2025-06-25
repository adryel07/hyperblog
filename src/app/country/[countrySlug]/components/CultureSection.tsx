interface CultureSectionProps {
  historyIntro: string;
  customs: string;
}

export function CultureSection({ historyIntro, customs }: CultureSectionProps) {
  return (
    <section className="py-8 px-4 md:px-8 bg-beige-light" id="culture"> {/* Asumiendo beige-light en tailwind.config */}
      <h2 className="text-3xl font-semibold text-brown-dark mb-6">Cultura e Historia</h2>
      <div className="space-y-4 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold text-brown-dark mb-2">Un Poco de Historia</h3>
          <p>{historyIntro}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brown-dark mb-2">Costumbres</h3>
          <p>{customs}</p>
        </div>
      </div>
    </section>
  );
}
