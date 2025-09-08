import { ReactChildren } from "@/type/reactChildren"

function Layout({ children }: ReactChildren) {
  return <div className="grid h-dvh place-items-center">{children}</div>
}

export default Layout
