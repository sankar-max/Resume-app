import { ThemeToggle } from "@/components/themeToggle"
import { SignInButton, UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <SignInButton />
      <UserButton />
    </>
  )
}
