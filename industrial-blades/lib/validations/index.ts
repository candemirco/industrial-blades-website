/**
 * Zod Validation Schemas
 * Form ve data validasyonları için merkezi şema tanımları
 */

import { z } from 'zod'

// =============================================================================
// İLETİŞİM FORMU
// =============================================================================

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'İsim en az 2 karakter olmalıdır')
    .max(100, 'İsim en fazla 100 karakter olabilir'),
  
  email: z
    .string()
    .email('Geçerli bir e-posta adresi giriniz'),
  
  phone: z
    .string()
    .min(10, 'Telefon numarası en az 10 karakter olmalıdır')
    .max(20, 'Telefon numarası en fazla 20 karakter olabilir')
    .regex(
      /^[\d\s\+\-\(\)]+$/,
      'Geçerli bir telefon numarası giriniz'
    )
    .optional()
    .or(z.literal('')),
  
  company: z
    .string()
    .max(100, 'Şirket adı en fazla 100 karakter olabilir')
    .optional()
    .or(z.literal('')),
  
  subject: z
    .string()
    .min(1, 'Lütfen bir konu seçiniz'),
  
  message: z
    .string()
    .min(10, 'Mesaj en az 10 karakter olmalıdır')
    .max(2000, 'Mesaj en fazla 2000 karakter olabilir'),
  
  consent: z
    .boolean()
    .refine((val) => val === true, 'KVKK onayı gereklidir'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// =============================================================================
// ÜRÜN FİLTRELEME
// =============================================================================

export const productFilterSchema = z.object({
  categoryId: z.string().optional(),
  subcategoryId: z.string().optional(),
  search: z.string().max(100).optional(),
  inStock: z.boolean().optional(),
  featured: z.boolean().optional(),
  sortBy: z.enum(['name', 'newest', 'popular']).optional(),
})

export type ProductFilterData = z.infer<typeof productFilterSchema>

// =============================================================================
// ARAMA
// =============================================================================

export const searchSchema = z.object({
  query: z
    .string()
    .min(2, 'Arama terimi en az 2 karakter olmalıdır')
    .max(100, 'Arama terimi en fazla 100 karakter olabilir'),
})

export type SearchData = z.infer<typeof searchSchema>

// =============================================================================
// YARDIMCI FONKSİYONLAR
// =============================================================================

/**
 * Form verilerini validate et ve hataları döndür
 */
export function validateForm<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: Record<string, string> } {
  const result = schema.safeParse(data)
  
  if (result.success) {
    return { success: true, data: result.data }
  }
  
  const errors: Record<string, string> = {}
  result.error.issues.forEach((err) => {
    const path = err.path.join('.')
    if (!errors[path]) {
      errors[path] = err.message
    }
  })
  
  return { success: false, errors }
}

/**
 * Tek bir alanı validate et
 */
export function validateField<T>(
  schema: z.ZodSchema<T>,
  value: unknown
): string | null {
  const result = schema.safeParse(value)
  
  if (result.success) {
    return null
  }
  
  return result.error.issues[0]?.message || 'Geçersiz değer'
}

