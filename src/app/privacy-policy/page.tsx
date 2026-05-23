import type { Metadata } from "next";
import { PolicyPage, PolicySection } from "@/components/ui/PolicyPage";

export const metadata: Metadata = { title: "Privacybeleid" };

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage badge="Juridisch" title="Privacybeleid" lastUpdated="1 januari 2025">
      <PolicySection title="1. Wie zijn wij?">
        <p>
          Dagufi is een online webshop gespecialiseerd in premium hondenaccessoires.
          Wij zijn verantwoordelijk voor de verwerking van jouw persoonsgegevens zoals
          beschreven in dit privacybeleid.
        </p>
        <p>
          <strong>Contactgegevens:</strong><br />
          Dagufi<br />
          E-mail: support@dagufi.com<br />
          Website: dagufi.com
        </p>
      </PolicySection>

      <PolicySection title="2. Welke gegevens verzamelen wij?">
        <p>Wij verzamelen de volgende persoonsgegevens:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Voor- en achternaam</li>
          <li>E-mailadres</li>
          <li>Bezorgadres en factuuradres</li>
          <li>Telefoonnummer (optioneel)</li>
          <li>Betaalgegevens (verwerkt via Shopify Payments — wij slaan deze niet zelf op)</li>
          <li>IP-adres en browsergegevens (analytisch)</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Waarvoor gebruiken wij jouw gegevens?">
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Het verwerken en leveren van bestellingen</li>
          <li>Het sturen van orderbevestigingen en track & trace informatie</li>
          <li>Klantenservice en het afhandelen van klachten of retouren</li>
          <li>Verbetering van onze website (geanonimiseerde statistieken)</li>
          <li>Wettelijke verplichtingen (boekhouding, belasting)</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Bewaartermijnen">
        <p>
          Wij bewaren jouw gegevens niet langer dan noodzakelijk. Ordergegevens
          bewaren wij maximaal 7 jaar in verband met fiscale verplichtingen.
          Marketinggegevens verwijderen wij direct na uitschrijving.
        </p>
      </PolicySection>

      <PolicySection title="5. Cookies">
        <p>
          Dagufi maakt gebruik van functionele en analytische cookies. Functionele
          cookies zijn noodzakelijk voor de werking van de winkelwagen. Analytische
          cookies (via Vercel Analytics) zijn volledig geanonimiseerd.
        </p>
      </PolicySection>

      <PolicySection title="6. Jouw rechten">
        <p>Je hebt het recht om:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Inzage te vragen in jouw persoonsgegevens</li>
          <li>Jouw gegevens te laten corrigeren of verwijderen</li>
          <li>Bezwaar te maken tegen verwerking</li>
          <li>Gegevensoverdraagbaarheid aan te vragen</li>
        </ul>
        <p>
          Neem hiervoor contact op via support@dagufi.com. Je kunt ook een klacht
          indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).
        </p>
      </PolicySection>

      <PolicySection title="7. Beveiliging">
        <p>
          Wij nemen passende technische en organisatorische maatregelen om jouw
          persoonsgegevens te beschermen. Alle gegevensoverdracht verloopt via
          SSL-encryptie (HTTPS).
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
