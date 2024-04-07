import { Nav, NavLink } from "@/components/Nav"
import Image from "next/image"
import img from "../../../public/products/bg-sdl.webp"
export const dynamic = "force-dynamic"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main >
      {/* <Image
      src={img}
      alt="bg"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      
      /> */}
      <Nav>
        <div className="flex w-screen justify-between items-center h-12">
          <h1 className="ml-10 font-bold text-2xl">Shivani Traders</h1>
        <div className="text-xl">

        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/orders">My Orders</NavLink>
        </div>
        </div>
      </Nav>
      <div className="container my-6">{children}</div>
    </main>
  )
}
