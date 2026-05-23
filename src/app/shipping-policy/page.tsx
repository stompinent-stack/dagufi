import type { Metadata } from "next";
import { PolicyPage, PolicySection } from "@/components/ui/PolicyPage";

export const metadata: Metadata = { title: "Verzendbeleid" };

export default function ShippingPolicyPage() {
  return (
    <PolicyPage badge="Beleid" title="Verzendbeleid" lastUpdated="1 januari 2025">
      <PolicySection title="Verwerkingstijd">
        <p>
          Bestellingen worden op werkdagen (maandag t/m vrijdag) verwerkt. Bestellingen
          geplaatst voor 22:00 worden de volgende werkdag verstuurd. Bestellingen in het
          weekend worden op maandag verwerkt.
        </p>
      </PolicySection>

      <PolicySection title="Verzendkosten">
        <p>
          <strong>Nederland:</strong> Gratis bij bestellingen vanaf €40. Onder €40: €4,95<br />
          <strong>België:</strong> Gratis bij bestellingen vanaf €50. Onder €50: €6,95<br />
          <strong>Duitsland:</strong> Gratis bij bestellingen vanaf €60. Onder €60: €8,95<br />
          <strong>Rest van Europa:</strong> Vaste prijs €12,95
        </p>
      </PolicySection>

      <PolicySection title="Levertijden">
        <p>
          <strong>Nederland:</strong> 2-4 werkdagen<br />
          <strong>België:</strong> 3-5 werkdagen<br />
          <strong>Duitsland:</strong> 4-6 werkdagen<br />
          <strong>Rest van Europa:</strong> 5-10 werkdagen
        </p>
        <p>
          Levertijden zijn indicatief. In drukke periodes (feestdagen) kunnen levertijden
          iets langer zijn. Wij informeren je per e-mail bij onverwachte vertragingen.
        </p>
      </PolicySection>

      <PolicySection title="Track & trace">
        <p>
          Na verzending ontvang je een e-mail met een track & trace link waarmee je jouw
          pakket kunt volgen. Je kunt ook onze{" "}
          <a href="/track-order" className="text-gold-500 hover:underline">
            Track Order pagina
          </a>{" "}
          gebruiken.
        </p>
      </PolicySection>

      <PolicySection title="Verzendpartners">
        <p>
          Wij werken samen met PostNL, DHL en DPD voor betrouwbare levering. De keuze
          van verzendpartner is afhankelijk van jouw locatie en beschikbaarheid.
        </p>
      </PolicySection>

      <PolicySection title="Pakket niet ontvangen?">
        <p>
          Als jouw pakket na de verwachte levertijd nog niet is aangekomen, neem dan
          contact op via support@dagufi.com. Vermeld je ordernummer en wij helpen je
          zo snel mogelijk verder.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
