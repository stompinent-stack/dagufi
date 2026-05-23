import type { Metadata } from "next";
import { PolicyPage, PolicySection } from "@/components/ui/PolicyPage";

export const metadata: Metadata = { title: "Algemene voorwaarden" };

export default function TermsPage() {
  return (
    <PolicyPage badge="Juridisch" title="Algemene voorwaarden" lastUpdated="1 januari 2025">
      <PolicySection title="1. Toepasselijkheid">
        <p>
          Deze algemene voorwaarden zijn van toepassing op alle bestellingen die via
          dagufi.com worden geplaatst. Door een bestelling te plaatsen, ga je akkoord
          met deze voorwaarden.
        </p>
      </PolicySection>

      <PolicySection title="2. Overeenkomst">
        <p>
          Een overeenkomst komt tot stand op het moment dat wij jouw bestelling hebben
          bevestigd per e-mail. Wij behouden ons het recht voor bestellingen te weigeren
          of te annuleren, bijvoorbeeld bij onjuiste prijsweergave.
        </p>
      </PolicySection>

      <PolicySection title="3. Prijzen">
        <p>
          Alle prijzen zijn inclusief BTW. Verzendkosten worden apart vermeld bij het
          afrekenen. Wij behouden ons het recht voor prijzen te wijzigen, maar de prijs
          die gold op het moment van jouw bestelling blijft van toepassing.
        </p>
      </PolicySection>

      <PolicySection title="4. Levering">
        <p>
          Wij streven ernaar bestellingen binnen de aangegeven levertijd te leveren.
          Levertijden zijn indicatief en geen garantie. Bij vertraging informeren wij
          je per e-mail.
        </p>
      </PolicySection>

      <PolicySection title="5. Herroepingsrecht">
        <p>
          Je hebt het recht om jouw bestelling zonder opgave van reden te annuleren
          binnen 14 dagen na ontvangst. Daarna heb je nogmaals 14 dagen om het product
          retour te sturen. Wij hanteren een ruimer beleid van 30 dagen — zie ons
          retourbeleid.
        </p>
      </PolicySection>

      <PolicySection title="6. Aansprakelijkheid">
        <p>
          Dagufi is niet aansprakelijk voor indirecte schade of gevolgschade. Onze
          aansprakelijkheid is in alle gevallen beperkt tot het bedrag van jouw bestelling.
        </p>
      </PolicySection>

      <PolicySection title="7. Klachten">
        <p>
          Klachten kunnen worden ingediend via support@dagufi.com. Wij streven ernaar
          klachten binnen 5 werkdagen te beantwoorden. Bij geschillen kun je je wenden
          tot het Europees platform voor onlinegeschillenbeslechting:
          ec.europa.eu/consumers/odr
        </p>
      </PolicySection>

      <PolicySection title="8. Toepasselijk recht">
        <p>
          Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden
          voorgelegd aan de bevoegde rechter in Nederland.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
