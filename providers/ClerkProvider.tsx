import { ReactChildren } from "@/type/reactChildren"
import { ClerkProvider } from "@clerk/nextjs"
function ClerkProviderClient({ children }: ReactChildren) {
  return <ClerkProvider>{children}</ClerkProvider>
}

export default ClerkProviderClient
