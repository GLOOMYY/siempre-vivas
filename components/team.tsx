'use client'

import { Card, CardContent } from "@/components/ui/card"

export function Team () {
    return (
        <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-black">Nosotras</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <img
                alt="Mujer 1"
                className="aspect-square overflow-hidden rounded-full object-cover object-center"
                height="150"
                src="/Mujer1.jpg"
                width="150"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Carmen Acevedo</h3>
                <p className="text-sm text-gray-500">Miembro</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <img
                alt="Mujer 2"
                className="aspect-square overflow-hidden rounded-full object-cover object-center"
                height="150"
                src="/Mujer2.jpg"
                width="150"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Mujer 2</h3>
                <p className="text-sm text-gray-500">Miembro</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <img
                alt="Mujer 3"
                className="aspect-square overflow-hidden rounded-full object-cover object-center"
                height="150"
                src="Mujer3.jpg"
                width="150"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Mujer 3</h3>
                <p className="text-sm text-gray-500">Miembro</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}