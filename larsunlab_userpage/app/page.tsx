import Hero from "@/app/Hero";
import Therapeutic from "@/app/Therapeutic";
import ProductPreview from "@/app/ProductPreview";
import CTA from "@/app/CTA";
import PurposeSection from "@/app/PurposeSection";
import LarsunEdge from "./LarsunEdge";

async function getLatestProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      cache: 'no-store' // Ensure fresh data on every visit
    });
    if (!res.ok) return [];
    const data = await res.json();

    // Map database model to UI model
    return data.map((p: any) => ({
      id: p.id,
      name: p.name,
      img: p.images?.[0]?.url || "/p1.jpg", // Use Cloudinary url or fallback
      category: p.category,
      desc: p.description.length > 80 ? p.description.substring(0, 77) + "..." : p.description
    }));
  } catch (error) {
    console.error("Home fetch error:", error);
    return [];
  }
}

export default async function Home() {
  const realProducts = await getLatestProducts();

  return (
    <>
      <Hero />
      <PurposeSection />
      <LarsunEdge />
      <Therapeutic />
      <ProductPreview
        title="Precision Products"
        description="Curated list of our most trusted therapeutic solutions for modern medicine."
        products={realProducts}
        category="all"
      />
      <CTA />
    </>
  );
}
