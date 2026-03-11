import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-[url('/footer.png')] bg-cover bg-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & Info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img src="/logo-dark.png" className="h-10" />
              <span className="text-lg font-bold text-white">
                Feagine
              </span>
            </div>
            <p className="text-xs text-white/60">
              擎羽｜走向人机共生未来
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">联系我们</h4>
            <div className="space-y-2 text-xs text-white/60">
              <p>媒体联系：contact@feagine.com</p>
              <p>商务合作：business@feagine.com</p>
              <p>深圳市南山区前海深港青年梦工场</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <img src="/social-media.png" className="h-25" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40">
            © 2025 Feagine. 版权所有。
            粤ICP备2025500045号-1 · 粤公网安备44030002009113号
          </p>
        </div>
      </div>
    </footer>
  )
}
