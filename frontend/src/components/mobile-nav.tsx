"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Link } from "react-router-dom"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-white">
        <SheetHeader>
          <SheetTitle>
            <div className="text-[#FF4A17] text-2xl font-bold flex items-center">
              <span className="text-3xl mr-2">⚒</span>
              Larreus repairs & Co LLC.
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-8">
          <Link href="/" className="text-[#FF4A17] font-medium px-2 py-1">
            Homes
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-[#FF4A17] px-2 py-1">
            Services
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-[#FF4A17] px-2 py-1">
            Projects
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-[#FF4A17] px-2 py-1">
            Blog
          </Link>
          <Link href="/pages" className="text-gray-600 hover:text-[#FF4A17] px-2 py-1">
            Pages
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-[#FF4A17] px-2 py-1">
            Contact Us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

