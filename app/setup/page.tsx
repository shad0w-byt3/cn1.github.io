"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

export default function SetupPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const runSetup = async () => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch("/api/setup-database")
      const data = await response.json()

      if (response.ok) {
        setResult(data)
      } else {
        setError(data.error || "Setup failed")
      }
    } catch (err) {
      setError("Failed to connect to setup endpoint")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="text-2xl text-cyan-400">Database Setup</CardTitle>
          <CardDescription className="text-zinc-400">
            Initialize your portfolio database with tables and sample data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={runSetup} disabled={loading} className="w-full bg-cyan-500 hover:bg-cyan-600 text-black">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Setting up...
              </>
            ) : (
              "Run Database Setup"
            )}
          </Button>

          {result && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">Setup Successful!</span>
              </div>
              <p className="text-sm text-zinc-300">{result.message}</p>
              <div className="mt-2 text-xs text-zinc-400">
                <p>Schema: {result.details?.schema}</p>
                <p>Projects: {result.details?.projects}</p>
                <p>Blogs: {result.details?.blogs}</p>
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex items-center gap-2 text-red-400 mb-2">
                <XCircle className="h-5 w-5" />
                <span className="font-semibold">Setup Failed</span>
              </div>
              <p className="text-sm text-zinc-300">{error}</p>
            </div>
          )}

          {result?.success && (
            <Button
              onClick={() => (window.location.href = "/")}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white"
            >
              Go to Portfolio
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
