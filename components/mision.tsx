'use client'

export function Mision () {
    return (
        <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            alt="Picnic"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/picnic.jpg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Nuestra Misión</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Buscamos que nuestros saberes se transformen en productos para el autocuidado y bienestar de otros
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}