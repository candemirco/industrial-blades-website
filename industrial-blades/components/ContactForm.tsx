'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // TODO: API endpoint'e gönderilecek
    // Şimdilik simüle ediyoruz
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      })
      
      // 3 saniye sonra başarı mesajını kaldır
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-steel-700 mb-2">
          Ad Soyad <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-steel-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="Adınız ve soyadınız"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-steel-700 mb-2">
          E-posta <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-steel-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="ornek@email.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-steel-700 mb-2">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-steel-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="+90 555 123 45 67"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-steel-700 mb-2">
          Şirket
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-steel-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="Şirket adı"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-steel-700 mb-2">
          Konu <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-steel-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="">Konu seçin</option>
          <option value="fiyat-teklifi">Fiyat Teklifi</option>
          <option value="urun-bilgisi">Ürün Bilgisi</option>
          <option value="danismanlik">Danışmanlık</option>
          <option value="ozel-uretim">Özel Üretim</option>
          <option value="diger">Diğer</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-steel-700 mb-2">
          Mesaj <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-steel-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
          placeholder="Mesajınızı buraya yazın..."
        />
      </div>

      {/* Status Message */}
      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="text-green-800 font-medium">
            Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-800 font-medium">
            Bir hata oluştu. Lütfen tekrar deneyin veya telefon ile iletişime geçin.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-steel-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Mesaj Gönder
          </>
        )}
      </button>

      <p className="text-sm text-steel-500 text-center">
        Formu göndererek{' '}
        <a href="/gizlilik-politikasi" className="text-primary-600 hover:underline">
          gizlilik politikamızı
        </a>{' '}
        kabul etmiş olursunuz.
      </p>
    </form>
  )
}

