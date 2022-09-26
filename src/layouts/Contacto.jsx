

export default function Contact() {
  return (
    
      <div className="flex flex-col justify-center items-center mt-10">
        <p className="text-4xl font-light hidden md:block lg:block">
          No encontraste alguna foto en especial?
        </p>
        <p className="text-2xl font-light hidden md:block lg:block">
          Escribenos!
        </p>
       
        <div className="flex flex-col items-center w-full pb-11">
          <label htmlFor="email" className="block text-lg font-normal text-gray-700">
            Correo:
          </label>
          <div className="mt-1 w-3/4">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full border-x border-y rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-center h-9"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="flex flex-col items-center w-full pb-10">
          <label htmlFor="message" className="block text-lg font-normal text-gray-700">
            Que buscas:
          </label>
          <div className="mt-1 w-3/4">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full rounded-md border-x border-y border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue={''}
            />
          </div>
        </div>
        <div className="sm:col-span-2 mb-10">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-200 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </div>
      </div>
    
  )
}