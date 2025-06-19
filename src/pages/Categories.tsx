
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2, Package } from 'lucide-react';
import { CategoryForm } from '@/components/CategoryForm';

const categories = [
  { 
    id: 1, 
    name: 'Ayurvedic Cleansers', 
    description: 'Traditional cleansing products with neem, turmeric and herbs', 
    products: 15, 
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop',
    subcategories: ['Face Wash', 'Body Wash', 'Hand Wash']
  },
  { 
    id: 2, 
    name: 'Natural Moisturizers', 
    description: 'Hydrating creams with rose, aloe vera and natural oils', 
    products: 22, 
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop',
    subcategories: ['Day Cream', 'Night Cream', 'Body Lotion']
  },
  { 
    id: 3, 
    name: 'Herbal Serums', 
    description: 'Concentrated treatments with kumkumadi, vitamin C from amla', 
    products: 18, 
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1556228841-d7d964c9a90d?w=200&h=200&fit=crop',
    subcategories: ['Anti-Aging Serum', 'Brightening Serum', 'Hydrating Serum']
  },
  { 
    id: 4, 
    name: 'Sunscreen', 
    description: 'Natural UV protection with zinc oxide and plant extracts', 
    products: 8, 
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1556228838-2b1ff73c3a87?w=200&h=200&fit=crop',
    subcategories: ['SPF 30', 'SPF 50', 'Tinted Sunscreen']
  },
  { 
    id: 5, 
    name: 'Traditional Scrubs', 
    description: 'Exfoliating products with sandalwood, besan and herbs', 
    products: 12, 
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop',
    subcategories: ['Face Scrub', 'Body Scrub', 'Lip Scrub']
  },
  { 
    id: 6, 
    name: 'Eye Care', 
    description: 'Special kajal and under-eye treatments with traditional ingredients', 
    products: 6, 
    status: 'Inactive',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop',
    subcategories: ['Kajal', 'Eye Cream', 'Eye Serum']
  },
];

export const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCategoryFormOpen, setIsCategoryFormOpen] = useState(false);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600 mt-1">Organize your Ayurvedic products into categories</p>
        </div>
        <Button 
          className="bg-gradient-to-r from-[#0fa1b8] to-[#06b6d4] hover:from-[#0e8a9c] hover:to-[#0891b2]"
          onClick={() => setIsCategoryFormOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Category
        </Button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            {/* Category Image */}
            <div className="h-48 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-[#0fa1b8]/10 to-[#06b6d4]/10 rounded-lg">
                  <Package className="w-6 h-6 text-[#0fa1b8]" />
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  category.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {category.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              
              {/* Subcategories */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-500 mb-2">Subcategories:</p>
                <div className="flex flex-wrap gap-1">
                  {category.subcategories.map((sub, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{category.products} products</span>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CategoryForm isOpen={isCategoryFormOpen} onClose={() => setIsCategoryFormOpen(false)} />
    </div>
  );
};
