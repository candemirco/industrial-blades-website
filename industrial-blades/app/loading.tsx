/**
 * Global Loading Component
 * Sayfa geçişlerinde gösterilen loading state
 */

import { SkeletonCard } from '@/components/ui'

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <div className="bg-gradient-to-br from-steel-900 to-steel-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="h-12 bg-white/10 rounded-lg w-2/3 mx-auto animate-pulse" />
            <div className="h-6 bg-white/10 rounded-lg w-1/2 mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

