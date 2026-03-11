export function VisionSection() {
  return (
    <section className="relative min-h-[500px]">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/愿景1.png')`,
        }}
      />

      {/* Gradient overlay behind text */}


      {/* Content */}
      <div className="relative z-10 flex min-h-[500px] items-center justify-end px-6 lg:px-60">
        <div className="max-w-md text-right r-[50%]">

          {/* Vision */}

          <h3 className="mb-2 text-xl font-bold md:text-2xl bg-gradient-to-r from-[#FFFFFF] to-[#EAEAEA] bg-clip-text text-transparent">
            愿景
          </h3>
          <p className="mb-8 text-sm text-white/80 md:text-base">
            走向人机共生未来
          </p>

          {/* Values */}
          <h3 className="mb-2 text-xl font-bold md:text-2xl bg-gradient-to-r from-[#FFFFFF] to-[#EAEAEA] bg-clip-text text-transparent">
            价值观
          </h3>
          <p className="text-sm text-white/80 md:text-base">
            专注、本质、顺势
          </p>

        </div>
      </div>

    </section>
  )
}
