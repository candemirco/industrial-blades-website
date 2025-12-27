/**
 * Global Image Protection
 * Tüm site görsellerini koruma altına alır
 * Layout.tsx'e eklenerek çalışır
 * 
 * NOT: Hydration hatası önlemek için görsellere doğrudan style eklemiyoruz
 * Bunun yerine event listener'lar ve CSS kullanıyoruz
 */

'use client'

import { useEffect } from 'react'

export default function GlobalImageProtection() {
  useEffect(() => {
    // Sağ tık engelleme (sadece görseller için)
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Görsel mi kontrol et
      if (target.tagName === 'IMG' || target.closest('img')) {
        e.preventDefault()
        
        // Kısa uyarı göster (opsiyonel)
        showProtectionWarning(e.clientX, e.clientY)
        return false
      }
    }

    // Sürükleme engelleme
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    // Klavye kısayolları (görselleri kaydetme girişimleri)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+S engelleme (sayfa kaydetme)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
      }
    }

    // Event listener'ları ekle
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null // Bu component görsel render etmez, sadece koruma sağlar
}

// Koruma uyarısı göster
function showProtectionWarning(x: number, y: number) {
  // Mevcut uyarıyı kaldır
  const existingWarning = document.getElementById('image-protection-warning')
  if (existingWarning) {
    existingWarning.remove()
  }

  // Yeni uyarı oluştur
  const warning = document.createElement('div')
  warning.id = 'image-protection-warning'
  warning.innerHTML = `
    <div style="
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      z-index: 99999;
      pointer-events: none;
      animation: fadeInOut 2s ease-in-out forwards;
    ">
      Bu görsel korumalıdır
    </div>
    <style>
      @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        15% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        85% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
      }
    </style>
  `
  
  document.body.appendChild(warning)
  
  // 2 saniye sonra kaldır
  setTimeout(() => {
    warning.remove()
  }, 2000)
}

