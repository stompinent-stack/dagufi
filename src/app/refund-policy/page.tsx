import type { Metadata } from "next";
import { PolicyPage, PolicySection } from "@/components/ui/PolicyPage";

export const metadata: Metadata = { title: "Retourbeleid" };

export default function RefundPolicyPage() {
  return (
    <PolicyPage badge="Beleid" title="Retour- en restitutiebeleid" lastUpdated="1 januari 2025">
      <PolicySection title="Ons retourbelofte">
        <p>
          Bij Dagufi geloven we dat jij 100% tevreden moet zijn. Daarom bieden we een
          <strong> 30-dagengarantie</strong>: niet tevreden? Geld terug — geen vragen
          gesteld.
        </p>
      </PolicySection>

      <PolicySection title="Voorwaarden voor retour">
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Retour binnen 30 dagen na ontvangst</li>
          <li>Product in originele, ongebruikte staat</li>
          <li>Originele verpakking aanwezig</li>
          <li>Aankoopbewijs of ordernummer beschikbaar</li>
        </ul>
        <p>
          Uitgezonderd van retour zijn producten die duidelijk zijn gebruikt of beschadigd
          door de klant.
        </p>
      </PolicySection>

      <PolicySection title="Hoe retourneer ik?">
        <p>
          1. Stuur een e-mail naar support@dagufi.com met je bestelnummer en reden voor retour.<br />
          2. Wij sturen je retourinstructies en het retouradres.<br />
          3. Stuur het pakket terug. Retourkosten zijn voor de klant, tenzij het product defect is.<br />
          4. Na ontvangst en controle verwerken we je terugbetaling binnen 5 werkdagen.
        </p>
      </PolicySection>

      <PolicySection title="Terugbetaling">
        <p>
          Terugbetaling vindt plaats via de originele betaalmethode. Na verwerking duurt
          het afhankelijk van jouw bank 1-3 werkdagen voordat het bedrag zichtbaar is.
        </p>
      </PolicySection>

      <PolicySection title="Defect of verkeerd product">
        <p>
          Heb je een defect of verkeerd product ontvangen? Neem dan direct contact op via
          support@dagufi.com. Stuur foto&apos;s mee van het product. Wij sturen kosteloos
          een vervangend product op of betalen het volledige aankoopbedrag terug,
          inclusief verzendkosten.
        </p>
      </PolicySection>

      <PolicySection title="Ruilen">
        <p>
          Wil je een andere maat of kleur? Retourneer het product via bovenstaande
          procedure en plaats een nieuwe bestelling. Zo profiteer je van de snelste
          levering.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
