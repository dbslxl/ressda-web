// "use client";

import Image from 'next/image'
import ProductList from '@/components/ProductList'
import ProductCard from '@/components/ProductCard'
import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import FAQ from '@/components/FAQ'



export default function Home() {
  return (
    <>      
           
      <Container>
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/img/cat.jpg)` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                Featured Products
                <Button size="lg" className="w-full py-6 text-xl">
                  <ShoppingBag className="mr-2" />
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <ProductList/>        
        <FAQ/>
      </Container>
    </>
  )
}
