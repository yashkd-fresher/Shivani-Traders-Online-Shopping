import { Nav, NavLink } from "@/components/Nav"

export const dynamic = "force-dynamic"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav>
        <div className="flex w-screen justify-between items-center h-12">
          <h1 className="font-bold ml-10 text-2xl">Shivani Traders</h1>
<div className="text-xl">

        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
</div>
        </div>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  )
}
