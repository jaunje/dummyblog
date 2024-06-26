import ContactForm from "../components/ContactForm";

function About() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Sobre este proyecto
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  About Page
                </h1>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 mb-2">
                  En este proyecto se ha utilizado:
                </h2>
                <ul>
                  <li>Vite</li>
                  <li>React Router Dom</li>
                  <li>
                    Consumo de la API DummyJson{" "}
                    <a
                      target="_blank"
                      className="underline"
                      href="https://dummyjson.com/docs/products"
                    >
                      Documentación
                    </a>
                  </li>
                  <li>Zustand (Store para favoritos y para posts)</li>
                  <li>Tailwind</li>
                  <li>Custom Hook (useFavorites)</li>
                  <li>React Hook Form en la página About</li>
                  <li>Testing en Blog y ContactForm</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="object-cover h-200 w-200"
              src="https://cataas.com/cat?width=400"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 mb-2">
                  Resumen
                </h2>
                <p>
                  Se puede navegar por el menú. Se puede ver grid con artículos
                  del blog y entrar en su información.
                </p>
                <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 mb-2">
                  Autor
                </h2>
                <p>Juan Jesús Mompo Verdejo</p>

                <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 mb-2">
                  Contacto
                </h2>
                <p>La información se verá en consola.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
