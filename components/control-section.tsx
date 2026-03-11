export function ControlSection() {
  return (
    <section
      className="bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('/控制.png')",
      }}
    >
      <div className="mx-auto max-w-2xl px-6 lg:px-12 text-left">

        {/* Title */}
        <h3 className="mb-8 text-xl font-bold md:text-2xl bg-gradient-to-r from-[#DADADA] to-[#FFFFFF] bg-clip-text text-transparent">
          控制与感知
        </h3>

        {/* List */}
        <ul className="space-y-4 text-sm md:text-base">

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
            <span className="bg-gradient-to-r from-[#DADADA] to-[#FFFFFF] bg-clip-text text-transparent">
              柔顺控制+小脑：实现顺应与发力兼备。
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
            <span className="bg-gradient-to-r from-[#DADADA] to-[#FFFFFF] bg-clip-text text-transparent">
              多模态感知闭环：保证平衡、稳定执行。
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
            <span className="bg-gradient-to-r from-[#DADADA] to-[#FFFFFF] bg-clip-text text-transparent">
              存档迭代能力：支持数据回流与优化。
            </span>
          </li>

        </ul>

      </div>
    </section>
  )
}
