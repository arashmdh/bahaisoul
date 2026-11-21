import {
  buildFeaturedPeopleJsonLd,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/seo";

function withoutContext(node: Record<string, unknown>) {
  const rest = { ...node };
  delete rest["@context"];
  return rest;
}

export function SiteJsonLd() {
  const graph = [
    buildWebsiteJsonLd(),
    buildOrganizationJsonLd(),
    ...buildFeaturedPeopleJsonLd(),
  ].map((node) => withoutContext(node as Record<string, unknown>));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
