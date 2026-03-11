export function HardwareSection() {
  return (
    <section className="bg-[#F3F4F6] py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <h3 className="mb-6 text-xl font-bold md:text-2xl bg-gradient-to-r from-[#666666] via-[#333333] to-[#000000] bg-clip-text text-transparent">
              硬件
            </h3>

            <ul className="space-y-3 text-sm text-neutral-600 md:text-base pl-0">

              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#666666]" />
                <span>柔性本体 + 远端驱动：兼顾输出、安全与响应。</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#666666]" />
                <span>轻量化移动平台：支持近人交互与快速部署。</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#666666]" />
                <span>开放场景友好：容错更高，接触更可控。</span>
              </li>

            </ul>
          </div>

          <div
            className="aspect-video bg-cover bg-center"
            style={{
              backgroundImage: `url('/硬件.png')`,
            }}
          />

        </div>
      </div>
    </section>
  )
}