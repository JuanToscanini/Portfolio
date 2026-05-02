export default function SobreMi() {
    return (
        <section id="sobremi" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-8">Sobre Mi</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div className="text-gray-300 space-y-4">
                        <p>
                 Estudiante de Programación en la UTN FRCU enfocado en el desarrollo Fullstack. 

                  Me apasiona resolver problemas complejos mediante un enfoque analítico en cada línea de código!
                  <br />
                   Soy un firme entusiasta del aprendizaje continuo y disfruto el desafío de explorar nuevas tecnologías y lenguajes para expandir mis horizontes técnicos y adaptarme a soluciones innovadoras"
                        </p>
                   
                    </div>
                    {/* Optional profile image placeholder */}
                    <div className="flex justify-center">
                        <div className="w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center text-gray-500 hover:scale-105 transition-transform duration-300">
                            [Tu Foto Aquí]
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}