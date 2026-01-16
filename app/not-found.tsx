import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center space-y-8">
            <div className="space-y-4">
                <h1 className="text-8xl font-bold tracking-tighter text-primary/20 select-none">404</h1>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Page Not Found</h2>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/">
                    <Button size="lg" className="group">
                        <Home className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button variant="outline" size="lg" className="group">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Contact Support
                    </Button>
                </Link>
            </div>
        </div>
    )
}
