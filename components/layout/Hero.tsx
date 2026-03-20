import Link from 'next/link';
import { ShieldCheck, ArrowRight, Phone } from 'lucide-react';

export default function Hero(){
    return (
        <div className='flex flex-col flex-1 bg-slate-50'>
         <section className="relative overflow-hidden bg-white px-4 pt-10 sm:px-6 lg:px-8 lg:pt-20 pb-16 lg:pb-24">

        
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-100 to-red-50 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

            
            <div className="max-w-2xl">

              
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-800 ring-1 ring-inset ring-red-600/20 mb-6">
                <ShieldCheck className="h-4 w-4" />
                <span>Distribuidor Oficial en todo Chiapas</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-5xl xl:text-6xl mb-6">
                Salud Integral Animal y Nutrición de <span className="text-red-800">Excelencia</span>
              </h1>

              
              <p className="text-lg leading-8 text-slate-600 mb-8 max-w-xl">
                Abastecemos a clínicas, farmacias y productores con los mejores medicamentos veterinarios y alimento súper premium para mascotas, con entregas garantizadas a todos los municipios.
              </p>

              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-800 px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-red-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
                >
                  Ver Catálogo Completo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-slate-900 ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
                >
                  <Phone className="h-4 w-4" />
                  Hablar con un Asesor
                </Link>
              </div>
            </div>
            <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">

              <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-100 shadow-2xl overflow-hidden ring-1 ring-gray-900/10 transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=1000"
                  alt="Veterinario revisando a un perro con cariño"
                  className="absolute inset-0 h-full w-full object-cover"
                />

              
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent mix-blend-multiply rounded-2xl"></div>
              </div>

              

            </div>

          </div>
        </div>
      </section>
    </div>
    )
}