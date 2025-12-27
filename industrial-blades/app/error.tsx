/**
 * Error Boundary Component
 * Sayfa hatalarında gösterilen bileşen
 */

'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Hataları loglama servisi varsa buraya eklenebilir
    console.error('Page Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-steel-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-10 h-10 text-red-600" />
            </div>
          </div>

          {/* Content */}
          <h1 className="text-2xl md:text-3xl font-bold text-steel-900 mb-4">
            Bir Şeyler Ters Gitti
          </h1>
          <p className="text-steel-600 mb-8">
            Sayfayı yüklerken bir hata oluştu. Lütfen tekrar deneyin veya 
            ana sayfaya dönün.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={reset} 
              size="lg" 
              icon={RefreshCw} 
              iconPosition="left"
            >
              Tekrar Dene
            </Button>
            <Button 
              href="/" 
              variant="outline" 
              size="lg" 
              icon={Home} 
              iconPosition="left"
            >
              Ana Sayfaya Dön
            </Button>
          </div>

          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-red-50 rounded-lg text-left">
              <p className="text-sm font-mono text-red-700 break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-500 mt-2">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

