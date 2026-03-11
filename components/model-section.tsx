export function ModelSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Image */}
          <div className="relative">
            <img
              src="/模型.png"
              className="aspect-video w-full rounded-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="rounded-lg bg-gradient-to-r from-neutral-200/60 to-transparent p-8">

            <h3 className="mb-6 text-xl font-bold md:text-2xl bg-gradient-to-r from-[#666666] to-[#000000] bg-clip-text text-transparent">
              模型与系统
            </h3>

            <ul className="space-y-3 text-sm text-neutral-800 md:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-600" />
                <span>本体呈式输入：提升形态适配能力。</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-600" />
                <span>多形态数据训练：支撑迁移与泛化。</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-600" />
                <span>软硬件协同闭环：强化交付与扩展能力。</span>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  )
}
