import { Star, ShoppingCart, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function FeaturedProducts() {
  const products = [
    {
      title: "Arduino Uno R3",
      category: "Microcontrollers",
      rating: 4.8,
      reviews: 1250,
      price: "Rs. 7,500.00",
      image: "https://www.arduino.cc/wiki/static/d0c35478051772fb2c8872596d11e502/0a490/A000066_iso.jpg.png", // Valid placeholder or use a local one if I had. I'll use a placeholder from unsplash or similar if needed, but for now I'll just put a path that might break or specific solid color.
      // Since I can't browse for real images easily, I will usage a colored div if image fails or just a placeholder URL.
      // Using a placeholder service for now to ensure it renders something.
      // Actually the prompt provided images. I cannot extract them.
      // I'll use placeholders.
      tags: ["Bestseller", "In Stock"],
      tagVariant: "default" as const // Type assertion for variant
    },
    {
      title: "Raspberry Pi 4 Model B",
      category: "Microcontrollers",
      rating: 4.9,
      reviews: 2100,
      price: "Rs. 16,500.00",
      image: "https://assets.raspberrypi.com/static/raspberry-pi-4-model-b-3d-b4b9b9a6b9a6b9a6b9a6b9a6.png", // Placeholder
      tags: ["Popular", "In Stock"],
      tagVariant: "secondary" as const
    },
    {
      title: "DHT22 Temperature Sensor",
      category: "Sensors",
      rating: 4.6,
      reviews: 890,
      price: "Rs. 3,000.00",
      image: "https://m.media-amazon.com/images/I/61X-c-C-bLL.jpg", // Placeholder
      tags: ["New", "In Stock"],
      tagVariant: "default" as const
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Featured Products</h2>
        <Button variant="outline" className="gap-2 text-cyan-600 dark:text-cyan-500 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
            View All <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Card key={index} className="overflow-hidden bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
            <div className="aspect-video relative bg-white p-4 flex items-center justify-center">
               <div className="absolute left-4 top-4 flex gap-2">
                 <Badge className={
                    product.tags[0] === "Bestseller" ? "bg-cyan-500 hover:bg-cyan-600" :
                    product.tags[0] === "Popular" ? "bg-blue-600 hover:bg-blue-700" :
                    product.tags[0] === "New" ? "bg-blue-400 hover:bg-blue-500 text-white" :
                     "bg-slate-500"
                 }>
                    {product.tags[0]}
                 </Badge>
                 <Badge variant="secondary" className="bg-green-500/20 text-green-500 hover:bg-green-500/30">
                    {product.tags[1]}
                 </Badge>
               </div>
               {/* Placeholder for image */}
               <div className="h-32 w-32 bg-slate-200 rounded-md flex items-center justify-center text-slate-400">
                    Product Image
               </div>
            </div>
            <CardContent className="space-y-4 p-6">
                <div className="space-y-1">
                    <span className="text-xs text-cyan-600 dark:text-cyan-500 px-2 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-900/50">
                        {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white pt-2">{product.title}</h3>
                </div>
                
                <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-slate-800 dark:text-white">{product.rating}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold text-cyan-600 dark:text-cyan-400">{product.price}</span>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                    </Button>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
