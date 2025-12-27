/**
 * Kategori Servisi
 * Kategori ve alt kategori işlemlerini yönetir
 * 
 * SOLID: Single Responsibility - Sadece kategori işlemleri
 */

import { Category, SubCategory, CategoryView, SubCategoryView } from '../types';
import { 
  CATEGORIES, 
  SUBCATEGORIES, 
  getAllCategories,
  getAllSubcategories,
  getCategoryById,
  getCategoryBySlug,
  getSubcategoryById,
  getSubcategoryBySlug,
  getSubcategoriesByCategory,
  getParentCategory,
} from '../data/categories';
import { getProductCountByCategory, getProductCountBySubcategory, getProductsBySubcategory } from '../data/products';

// =============================================================================
// KATEGORİ SERVİSİ
// =============================================================================

class CategoryService {
  /**
   * Tüm kategorileri view modeli olarak döndür
   * Ürün sayıları hesaplanmış olarak gelir
   */
  getAllCategoriesWithCounts(): CategoryView[] {
    const categories = getAllCategories();
    
    return categories.map(category => this.getCategoryView(category));
  }

  /**
   * Kategori view modelini oluştur
   */
  getCategoryView(category: Category): CategoryView {
    const subcategories = this.getSubcategoryViewsByCategory(category.id);
    const totalProductCount = subcategories.reduce((sum, sub) => sum + sub.productCount, 0);
    
    return {
      ...category,
      subcategories,
      totalProductCount,
    };
  }

  /**
   * Kategoriye ait alt kategorileri view modeli olarak döndür
   */
  getSubcategoryViewsByCategory(categoryId: string): SubCategoryView[] {
    const subcategories = getSubcategoriesByCategory(categoryId);
    
    return subcategories.map(sub => ({
      ...sub,
      productCount: getProductCountBySubcategory(sub.id),
    }));
  }

  /**
   * Slug'a göre kategori view modeli döndür
   */
  getCategoryViewBySlug(slug: string): CategoryView | undefined {
    const category = getCategoryBySlug(slug);
    if (!category) return undefined;
    
    return this.getCategoryView(category);
  }

  /**
   * Slug'a göre alt kategori view modeli döndür
   */
  getSubcategoryViewBySlug(slug: string): SubCategoryView | undefined {
    const subcategory = getSubcategoryBySlug(slug);
    if (!subcategory) return undefined;
    
    return {
      ...subcategory,
      productCount: getProductCountBySubcategory(subcategory.id),
      products: getProductsBySubcategory(subcategory.id),
    };
  }

  /**
   * Mega menü için kategori verisi döndür
   * Legacy format ile uyumlu
   */
  getMegaMenuCategories(): CategoryView[] {
    return this.getAllCategoriesWithCounts();
  }

  /**
   * Breadcrumb için kategori yolunu döndür
   */
  getCategoryBreadcrumb(categorySlug: string, subcategorySlug?: string): Array<{ name: string; slug: string; url: string }> {
    const breadcrumb: Array<{ name: string; slug: string; url: string }> = [
      { name: 'Ana Sayfa', slug: '', url: '/' },
      { name: 'Kategoriler', slug: 'kategoriler', url: '/kategoriler' },
    ];

    const category = getCategoryBySlug(categorySlug);
    if (category) {
      breadcrumb.push({
        name: category.name,
        slug: category.slug,
        url: `/kategoriler/${category.slug}`,
      });

      if (subcategorySlug) {
        const subcategory = getSubcategoryBySlug(subcategorySlug);
        if (subcategory) {
          breadcrumb.push({
            name: subcategory.name,
            slug: subcategory.slug,
            url: `/kategoriler/${category.slug}/${subcategory.slug}`,
          });
        }
      }
    }

    return breadcrumb;
  }

  /**
   * Kategori ID'ye göre doğrudan erişim
   */
  getById(id: string): Category | undefined {
    return getCategoryById(id);
  }

  /**
   * Alt kategori ID'ye göre doğrudan erişim
   */
  getSubcategoryById(id: string): SubCategory | undefined {
    return getSubcategoryById(id);
  }

  /**
   * Alt kategorinin ana kategorisini getir
   */
  getParentCategory(subcategoryId: string): Category | undefined {
    return getParentCategory(subcategoryId);
  }
}

// Singleton instance
export const categoryService = new CategoryService();

// Default export
export default categoryService;


