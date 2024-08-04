/*Credit to https://nextjs.org/docs/app/api-reference/functions/use-router,
the Next.js documentation*/
'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
 
export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
 
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])
 
  return {pathname, searchParams}
}