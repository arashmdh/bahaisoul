import {
  buildFeaturedPeopleJsonLd,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/seo";

export function SiteJsonLd() {
  const graph = [
    buildWebsiteJsonLd(),
    buildOrganizationJsonLd(),
    ...buildFeaturedPeopleJsonLd(),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph.map(({ "@context": _c, ...rest }) => rest),
        }),
      }}
    />
  );
}
