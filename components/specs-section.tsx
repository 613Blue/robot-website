export function SpecsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">

        {/* Title */}
        <h3 className="mb-8 text-2xl font-bold md:text-3xl bg-gradient-to-r from-[#666666] to-[#000000] bg-clip-text text-transparent">
          Feagine Edu A01 -产品参数
        </h3>
        <p className="mb-6 text-sm text-left leading-relaxed md:text-base bg-gradient-to-r from-[#666666] to-[#000000] bg-clip-text text-transparent">
          面向科研与开发场景，产品提供开放的硬件本体及软件/API 接口，不预置模型，定位于柔性操作方向的可编程基础研究平台，支持用户开展自主编程、算法验证与二次开发。npm run dev



        </p>
        <div className="grid items-center gap-12 md:grid-cols-3">

          {/* Left specs */}
          <div className="space-y-6 text-sm text-neutral-600 md:text-base">
            <div className="flex justify-between border-b border-neutral-200 pb-2">
              <span>末端执行器</span>
              <span className="text-neutral-900">吸盘、抓夹</span>
            </div>

            <div className="flex justify-between border-b border-neutral-200 pb-2">
              <span>单次充电可连续工作时长</span>
              <span className="text-neutral-900">2h</span>
            </div>

            <div className="flex justify-between border-b border-neutral-200 pb-2">
              <span>柔性关节数量</span>
              <span className="text-neutral-900">3</span>
            </div>

            <div className="flex justify-between border-b border-neutral-200 pb-2">
              <span>柔性关节运动范围</span>
              <span className="text-neutral-900 text-right">
                方向角 0°–360°<br />
                弯曲角 0°–150°
              </span>
            </div>
          </div>

          {/* Center product */}
          <div className="flex items-center justify-center">
            <img
              src="/product.svg"
              alt="product"
              className="h-72 w-auto object-contain"
            />
          </div>

          {/* Right specs */}
          <div className="space-y-6 text-sm text-neutral-600 md:text-base">
            <div className="flex justify-between border-b border-neutral-200 pb-2">
              <span>整体尺寸</span>
              <span className="text-neutral-900">180×150×720 mm</span>
            </div>

            <div className="flex justify-between border-b border-neutral-200 pb-2">
              <span>腱绳拉力</span>
              <span className="text-neutral-900">35 kg</span>
            </div>

            <div className="flex justify-between border-b border-neutral-200 pb-2">
              <span>支持接口</span>
              <span className="text-neutral-900">ROS API</span>
            </div>

            <div className="flex justify-between border-b border-neutral-200 pb-2">
              <span>整机重量</span>
              <span className="text-neutral-900">1.5 kg</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
