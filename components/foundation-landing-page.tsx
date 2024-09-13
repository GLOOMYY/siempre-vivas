'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeartIcon, GlobeIcon, BookOpenIcon } from "lucide-react"
import { Products } from "@/components/products"
import { Mision } from "@/components/mision"
import { Impact } from "@/components/impact"
import { Team } from "@/components/team"


export function FoundationLandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <HeartIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">Asociación Mujeres Siemprevivas</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#mission">
            Nuestra Misión
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#products">
          Nuestros Productos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#impact">
          Nuestro Impacto
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#team">
            Nosotras
          </Link>
        </nav>
      </header>
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/fondo.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Empoderamos a las mujeres
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Conservando nuestros saberes ancestrales, nuestras tradiciones y buscando una independencia económica desde el comercio justo y el respeto por el medio ambiente
                </p> 
              </div>
              <div className="space-x-4">
                {/* <Button variant="secondary" size="lg">
                  Learn More
                </Button>
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Our Products
                </Button> */}
              </div>
            </div>
          </div>
        </section>
        <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <Mision />
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <Products />
        </section>


        <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <Impact />
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <Team />
        </section>
        

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-black-500">© 2023 Siemprevivas. All rights reserved.</p>

      </footer>
    </div>
  )
}