export function PartnersSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Title */}
        <h3 className="mb-12 text-center text-4xl font-bold bg-gradient-to-r from-[#666666] to-[#000000] bg-clip-text text-transparent">
          合作伙伴
        </h3>

        {/* Partners Logos */}
        <div className="flex justify-center">
          <img
            src="/partners.svg"
            alt="partners"
            className="w-full max-w-2xl"
          />
        </div>

      </div>
    </section>
  )
}
