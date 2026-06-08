import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/search", label: "Search" },
  { href: "/tutor", label: "Tutor" },
  { href: "/predictions", label: "Predictions" },
  { href: "/admin", label: "Admin" }
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-sm text-paper">EA</span>
            <span>Exam AI</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-ink/75 transition hover:bg-white hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button className="focus-ring rounded-md bg-coral px-4 py-2 text-sm font-semibold text-white shadow-soft">
            Upgrade
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">{children}</main>
      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-ink/10 bg-paper md:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="px-2 py-3 text-center text-xs text-ink/75">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
