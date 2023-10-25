import Hero from "./hero";

export default function IndexPage() {
  return (
    <>
      <Hero />
      <section className="bg-white px-4 pb-96 pt-16 text-black md:px-8">
        <div className="container mx-auto">
          <ul className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-[10px] border border-blue-400 bg-white px-4 py-8">
              <p className="text-h2 mb-4 text-blue-500">Scale</p>
              <p>Architected to meet all your data needs</p>
            </li>
            <li className="rounded-[10px] border border-blue-400 bg-white px-4 py-8">
              <p className="text-h2 mb-4 text-blue-500">Scale</p>
              <p>Architected to meet all your data needs</p>
            </li>
            <li className="rounded-[10px] border border-blue-400 bg-white px-4 py-8">
              <p className="text-h2 mb-4 text-blue-500">Scale</p>
              <p>Architected to meet all your data needs</p>
            </li>
            <li className="rounded-[10px] border border-blue-400 bg-white px-4 py-8">
              <p className="text-h2 mb-4 text-blue-500">Scale</p>
              <p>Architected to meet all your data needs</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
