export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-neutral-900">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/4K-cover.png')`,
        }}
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40  to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center pt-45 px-6 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="max-w-xl text-5xl font-bold leading-tight text-white md:text-4xl lg:text-6xl">
            走向人机共生未来
          </h1>
          <p className="mt-4 max-w-md text-base text-white/70 md:text-lg">
            延伸人类意志，拓展人类能力边界
          </p>
        </div>
      </div>

    </section>
  )
}