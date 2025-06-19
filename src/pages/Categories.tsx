
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2, Package } from 'lucide-react';
import { CategoryForm } from '@/components/CategoryForm';

const categories = [
  { 
    id: 1, 
    name: 'आयुर्वेदिक क्लींज़र', 
    description: 'नीम, हल्दी और जड़ी-बूटियों के साथ पारंपरिक सफाई उत्पाद', 
    products: 15, 
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop',
    subcategories: ['फेस वाश', 'बॉडी वाश', 'हैंड वाश']
  },
  { 
    id: 2, 
    name: 'प्राकृतिक मॉइस्चराइज़र', 
    description: 'गुलाब, एलोवेरा और प्राकृतिक तेलों के साथ हाइड्रेटिंग क्रीम', 
    products: 22, 
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop',
    subcategories: ['डे क्रीम', 'नाइट क्रीम', 'बॉडी लोशन']
  },
  { 
    id: 3, 
    name: 'हर्बल सीरम', 
    description: 'कुमकुमादि, आंवला से विटामिन सी के साथ कॉन्सेंट्रेटेड ट्रीटमेंट', 
    products: 18, 
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1556228841-d7d964c9a90d?w=200&h=200&fit=crop',
    subcategories: ['एंटी-एजिंग सीरम', 'ब्राइटनिंग सीरम', 'हाइड्रेटिंग सीरम']
  },
  { 
    id: 4, 
    name: 'सनस्क्रीन', 
    description: 'जिंक ऑक्साइड और प्लांट एक्सट्रैक्ट्स के साथ प्राकृतिक यूवी प्रोटेक्शन', 
    products: 8, 
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1556228838-2b1ff73c3a87?w=200&h=200&fit=crop',
    subcategories: ['SPF 30', 'SPF 50', 'टिंटेड सनस्क्रीन']
  },
  { 
    id: 5, 
    name: 'पारंपरिक स्क्रब', 
    description: 'चंदन, बेसन और जड़ी-बूटियों के साथ एक्सफोलिएटिंग उत्पाद', 
    products: 12, 
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop',
    subcategories: ['फेस स्क्रब', 'बॉडी स्क्रब', 'लिप स्क्रब']
  },
  { 
    id: 6, 
    name: 'आंखों की देखभाल', 
    description: 'पारंपरिक सामग्री के साथ विशेष काजल और अंडर-आई ट्रीटमेंट', 
    products: 6, 
    status: 'Inactive',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop',
    subcategories: ['काजल', 'आई क्रीम', 'आई सीरम']
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
          <h1 className="text-3xl font-bold text-gray-900">श्रेणियां (Categories)</h1>
          <p className="text-gray-600 mt-1">अपने आयुर्वेदिक उत्पादों को श्रेणियों में व्यवस्थित करें</p>
        </div>
        <Button 
          className="bg-gradient-to-r from-[#0fa1b8] to-[#06b6d4] hover:from-[#0e8a9c] hover:to-[#0891b2]"
          onClick={() => setIsCategoryFormOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          नई श्रेणी जोड़ें
        </Button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="श्रेणियां खोजें..."
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
                  {category.status === 'Active' ? 'सक्रिय' : 'निष्क्रिय'}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              
              {/* Subcategories */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-500 mb-2">उप-श्रेणियां:</p>
                <div className="flex flex-wrap gap-1">
                  {category.subcategories.map((sub, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{category.products} उत्पाद</span>
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
