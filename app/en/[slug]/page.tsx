import { notFound } from "next/navigation";
import { DroneLandingPage } from "@/components/DronePage";
import { allPages, canonicalUrl, findPage, pathFor } from "@/lib/droneData";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allPages.map((page) => ({ slug: page.enSlug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = findPage(slug, "en");
  if (!page) return {};
  return {
    title: page.enTitle,
    description: page.enDescription,
    alternates: {
      canonical: canonicalUrl(pathFor(page, "en")),
      languages: {
        "es-DO": canonicalUrl(pathFor(page)),
        es: canonicalUrl(pathFor(page)),
        en: canonicalUrl(pathFor(page, "en"))
      }
    },
    openGraph: {
      title: page.enTitle,
      description: page.enDescription,
      url: canonicalUrl(pathFor(page, "en")),
      siteName: "Babula Shots Drone",
      locale: "en_US",
      type: "website",
      images: [
        { url: "/images/drone/social-card-1200x630.webp", width: 1200, height: 630, alt: "Babula Shots Drone" }
      ]
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = findPage(slug, "en");
  if (!page) notFound();
  return <DroneLandingPage page={page} locale="en" />;
}
