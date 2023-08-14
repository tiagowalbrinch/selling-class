import Link from "next/link"
import { ContentWrapper } from "./partials"
export function Header() {
  return (
    <ContentWrapper>
      <Link href="/">Home</Link>
      <Link href="/courses">Courses</Link>
      <Link href="/login">Login</Link>
    </ContentWrapper>
  )
}
