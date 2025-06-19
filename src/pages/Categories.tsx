
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2, Package } from 'lucide-react';

const categories = [
  { id: 1, name: 'Ayurvedic Cleansers', description: 'Traditional cleansing products with neem, turmeric, and herbs', products: 15, status: 'Active' },
  { id: 2, name: 'Natural Moisturizers', description: 'Hydrating creams with rose, aloe vera, and natural oils', products: 22, status: 'Active' },
  { id: 3, name: 'Herbal Serums', description: 'Concentrated treatments with kumkumadi, vitamin C from amla', products: 18, status: 'Active' },
  { id: 4, name: 'Sunscreens', description: 'Natural UV protection with zinc oxide and plant extracts', products: 8, status: 'Active' },
  { id: 5, name: 'Traditional Scrubs', description: 'Exfoliating products with sandalwood, gram flour, and herbs', products: 12, status: 'Active' },
  { id: 6, name: 'Eye Care', description: 'Specialized kajal and under-eye treatments with traditional ingredients', products: 6, status: 'Inactive' },
];

export const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Category
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
          <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                category.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {category.status}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{category.description}</p>
            
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
        ))}
      </div>
    </div>
  );
};
