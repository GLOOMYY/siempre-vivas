'use client'

import { Card, CardContent } from "@/components/ui/card"

export function Products() {
    return (
        <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-black">Nuestros Productos</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <img
                alt="Handmade Bracelet"
                className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                height="200"
                src="/producto.jpg"
                width="200"
              />
              <h3 className="text-xl font-bold">Cilantro</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <img
                alt="Organic Coffee"
                className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                height="200"
                src="/producto1.jpg"
                width="200"
              />
              <h3 className="text-xl font-bold">Aceites</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <img
                alt="Artisan Chocolate"
                className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                height="200"
                src="/producto2.jpg"
                width="200"
              />
              <h3 className="text-xl font-bold">Otros</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}

