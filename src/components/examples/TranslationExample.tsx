// Example component showing how to use the new translation system
"use client";

import { useTranslations } from "@/i18n/hooks";
import { Button } from "@/components/ui/button";

export default function ExampleComponent() {
  const { t, common, navbar, footer, home, services, contact, language } =
    useTranslations();

  // Get specific page translations
  const aboutTranslations = t("about");
  const faqTranslations = t("faq");

  return (
    <div className="space-y-6">
      {/* Using home translations */}
      <section>
        {typeof home === "object" && home && "hero" in home && (
          <>
            <h1>{home.hero?.title}</h1>
            <p>{home.hero?.subtitle}</p>
            <Button>{home.hero?.cta}</Button>
          </>
        )}
      </section>

      {/* Using common translations */}
      <section>
        <h2>{common.loading}</h2>
        <Button>{common.submit}</Button>
        <Button variant="outline">{common.cancel}</Button>
      </section>

      {/* Using navbar translations */}
      <nav>
        <div className="logo">{navbar.logo}</div>
        <ul>
          <li>{navbar.home}</li>
          <li>{navbar.services}</li>
          <li>{navbar.contact}</li>
        </ul>
      </nav>

      {/* Using services translations */}
      <section>
        {typeof services === "object" && services && "title" in services && (
          <h2>{services.title}</h2>
        )}
        {typeof services === "object" && services && "subtitle" in services && (
          <p>{services.subtitle}</p>
        )}
        {typeof services === "object" &&
          services &&
          "services" in services &&
          Array.isArray(services.services) &&
          services.services.map(
            (service: {
              id: string | number;
              title: string;
              description: string;
              ctaText: string;
            }) => (
              <div key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Button>{service.ctaText}</Button>
              </div>
            )
          )}
      </section>

      {/* Using specific page translations with t() function */}
      <section>
        {typeof aboutTranslations === "object" &&
          aboutTranslations &&
          "title" in aboutTranslations && (
            <>
              <h2>{aboutTranslations.title}</h2>
              {"story" in aboutTranslations && aboutTranslations.story && (
                <p>{aboutTranslations.story.content}</p>
              )}
            </>
          )}
      </section>

      {/* Using FAQ translations */}
      <section>
        {typeof faqTranslations === "object" &&
          faqTranslations &&
          "title" in faqTranslations && (
            <>
              <h2>{faqTranslations.title}</h2>
              {Array.isArray((faqTranslations as any).faqs) &&
                (faqTranslations as any).faqs.map(
                  (faq: {
                    id: string | number;
                    question: string;
                    answer: string;
                  }) => (
                    <div key={faq.id}>
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  )
                )}
            </>
          )}
      </section>

      {/* Using contact translations */}
      <section>
        {typeof contact === "object" && contact && "title" in contact && (
          <>
            <h2>{contact.title}</h2>
            {"form" in contact && contact.form && (
              <>
                <div>
                  <label>{contact.form.name}</label>
                  <input placeholder={contact.form.namePlaceholder} />
                </div>
                <div>
                  <label>{contact.form.email}</label>
                  <input placeholder={contact.form.emailPlaceholder} />
                </div>
                <Button>{contact.form.submit}</Button>
              </>
            )}
          </>
        )}
      </section>

      {/* Using footer translations */}
      <footer>
        <p>{footer.description}</p>
        <div>
          <h3>{footer.servicesTitle}</h3>
          <ul>
            <li>{footer.services?.tuning}</li>
            <li>{footer.services?.maintenance}</li>
            <li>{footer.services?.emergency}</li>
          </ul>
        </div>
      </footer>

      {/* Language indicator */}
      <div>Current Language: {language}</div>
    </div>
  );
}

// Server component example
// export function ServerExampleComponent({
//   params,
// }: {
//   params: { lng: string };
// }) {
//   // getTranslations is not available here; this is just a placeholder
//   return null;
// }
