
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import { ProductForm } from '@/components/ProductForm';

const products = [
  { id: 1, name: 'नीम और हल्दी फेस वाश', category: 'क्लींज़र', price: '₹450', stock: 120, status: 'Active', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=100&h=100&fit=crop' },
  { id: 2, name: 'गुलाब और एलोवेरा मॉइस्चराइज़र', category: 'मॉइस्चराइज़र', price: '₹320', stock: 85, status: 'Active', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100&h=100&fit=crop' },
  { id: 3, name: 'आयुर्वेदिक जेंटल क्लींज़र', category: 'क्लींज़र', price: '₹280', stock: 200, status: 'Active', image: 'https://images.unsplash.com/photo-1556228841-d7d964c9a90d?w=100&h=100&fit=crop' },
  { id: 4, name: 'कुमकुमादि एंटी-एजिंग क्रीम', category: 'मॉइस्चराइज़र', price: '₹650', stock: 45, status: 'Active', image: 'https://images.unsplash.com/photo-1556228838-2b1ff73c3a87?w=100&h=100&fit=crop' },
  { id: 5, name: 'चंदन एक्सफोलिएटिंग स्क्रब', category: 'एक्सफोलिएंट्स', price: '₹350', stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1556228838-2b1ff73c3a87?w=100&h=100&fit=crop' },
];

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isProductFormOpen, setIsProductFormOpen] = useState(false);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">उत्पाद (Products)</h1>
          <p className="text-gray-600 mt-1">अपने आयुर्वेदिक स्किनकेयर उत्पादों की इन्वेंट्री का प्रबंधन करें</p>
        </div>
        <Button 
          className="bg-gradient-to-r from-[#0fa1b8] to-[#06b6d4] hover:from-[#0e8a9c] hover:to-[#0891b2]"
          onClick={() => setIsProductFormOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          नया उत्पाद जोड़ें
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="उत्पाद खोजें..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">फ़िल्टर</Button>
            <Button variant="outline">एक्सपोर्ट</Button>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">उत्पाद</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">श्रेणी</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">मूल्य</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">स्टॉक</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">स्थिति</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">कार्य</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <span className="font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{product.category}</td>
                  <td className="py-4 px-6 font-medium text-gray-900">{product.price}</td>
                  <td className="py-4 px-6">
                    <span className={`${product.stock > 50 ? 'text-green-600' : product.stock > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status === 'Active' ? 'सक्रिय' : 'स्टॉक समाप्त'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ProductForm isOpen={isProductFormOpen} onClose={() => setIsProductFormOpen(false)} />
    </div>
  );
};
