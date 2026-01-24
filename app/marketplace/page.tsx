import { DashboardHeader } from "@/components/organisms/Dashboard/Header"
import { MarketplaceHero } from "@/components/organisms/Marketplace/MarketplaceHero"
import { CategoryGrid } from "@/components/organisms/Marketplace/CategoryGrid"
import { FeaturedProducts } from "@/components/organisms/Marketplace/FeaturedProducts"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <DashboardHeader />
      <main className="container mx-auto space-y-12 p-4 md:p-8">
        <MarketplaceHero />
        <CategoryGrid />
        <FeaturedProducts />
      </main>
    </div>
  )
}
