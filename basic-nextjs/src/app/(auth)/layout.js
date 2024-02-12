'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import "../index.css"
// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({ children }) {

    const navLink = [
        {name: 'Register', href: '/register'},
        {name: 'Login', href: '/login'},
        {name: 'Forgot Password', href: '/forgot-password'}
    ]

    const pathName = usePathname()

 return (
    <html lang="en">
      <body>
        {
            navLink.map((link) => {
                const isActive = pathName.startsWith(link.href);
                return (
                    <Link href={link.href} className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>{link.name}</Link>
                )
            })
        }
        {children}
      </body>
    </html>
  )
}