'use client'

import { Card, CardContent } from "@/components/ui/card"
import { HeartIcon, GlobeIcon, BookOpenIcon } from "lucide-react"

export function Impact () {
    return (
        <div className="container px-4 md:px-6">


        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-black mb-8">Nuestro Impacto</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <GlobeIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">¿Donde estamos?</h3>
              <p className="text-center text-gray-500">
                Estamos ubicadas en la vereda San José de la Montaña en San Cristobal, Antioquia.
              </p>
            </CardContent>
          </Card>
          {/* <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <BookOpenIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">¿Donde puedes encontrar nuestros productos?</h3>
              <p className="text-center text-gray-500">
                Pueden encontrarnos en los Mercados Campesinos de Corantioquia y Ciudad del Rio ademas de poder comprar por medio de esta pagina web.
              </p>
            </CardContent>
          </Card> */}

          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
            <BookOpenIcon className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">¿De donde provienen nuestros productos y donde encontrarlos?</h3>
              <p className="text-center text-gray-500">
                Nuestros productos son provenientes del conocimiento de nuestros acenstros y la transformación que realizamos a las plantas
              </p>
              <p className="text-center text-gray-500">
              Pueden encontrarnos en los Mercados Campesinos de Corantioquia y Ciudad del Rio ademas de poder comprar por medio de esta pagina web.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <HeartIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">¿Quienes somos?</h3>
              <p className="text-center text-gray-500">
                Somos una asociación de 14 mujeres campesinas, dedicadas a la producción y venta de productos agroecológicos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}