import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-[24px] flex-wrap items-center justify-center mt-5 border-red-500 border-2">
      <Link href="/" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-xl">Home</Link>
      <Link href="/resume" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-xl">Resume</Link>
    </header>
  )
}