import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, X, Upload } from 'lucide-react';

interface ProductFormData {
  images: string[];
  title: string;
  category: string;
  subcategory: string;
  skinType: string;
  shortDescription: string;
  mrp: string;
  discountedPrice: string;
  variations: Array<{ size: string; price: string }>;
  subscription: {
    title: string;
    subheading: string;
    pricing: string;
  };
  specialties: Array<{ image: string; text: string }>;
  productDetails: string;
  ingredients: string[];
  faqs: Array<{ question: string; answer: string }>;
  skinTypeImage: string;
  howToUse: Array<{ image: string; text: string }>;
  keyIngredients: Array<{ image: string; text: string }>;
}

// Mock data for categories and subcategories
const categories = [
  {
    id: 'cleansers',
    name: 'Cleansers',
    subcategories: [
      { id: 'face-wash', name: 'Face Wash' },
      { id: 'face-scrub', name: 'Face Scrub' },
      { id: 'micellar-water', name: 'Micellar Water' }
    ]
  },
  {
    id: 'moisturizers',
    name: 'Moisturizers',
    subcategories: [
      { id: 'day-cream', name: 'Day Cream' },
      { id: 'night-cream', name: 'Night Cream' },
      { id: 'face-oil', name: 'Face Oil' }
    ]
  },
  {
    id: 'treatments',
    name: 'Treatments',
    subcategories: [
      { id: 'serum', name: 'Serum' },
      { id: 'face-mask', name: 'Face Mask' },
      { id: 'spot-treatment', name: 'Spot Treatment' }
    ]
  }
];

export const ProductForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    images: [],
    title: '',
    category: '',
    subcategory: '',
    skinType: '',
    shortDescription: '',
    mrp: '',
    discountedPrice: '',
    variations: [{ size: '', price: '' }],
    subscription: { title: '', subheading: '', pricing: '' },
    specialties: [{ image: '', text: '' }],
    productDetails: '',
    ingredients: [],
    faqs: [{ question: '', answer: '' }],
    skinTypeImage: '',
    howToUse: [{ image: '', text: '' }],
    keyIngredients: [{ image: '', text: '' }]
  });

  const [newIngredient, setNewIngredient] = useState('');

  const selectedCategory = categories.find(cat => cat.id === formData.category);

  const addVariation = () => {
    setFormData(prev => ({
      ...prev,
      variations: [...prev.variations, { size: '', price: '' }]
    }));
  };

  const removeVariation = (index: number) => {
    setFormData(prev => ({
      ...prev,
      variations: prev.variations.filter((_, i) => i !== index)
    }));
  };

  const addSpecialty = () => {
    setFormData(prev => ({
      ...prev,
      specialties: [...prev.specialties, { image: '', text: '' }]
    }));
  };

  const removeSpecialty = (index: number) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties.filter((_, i) => i !== index)
    }));
  };

  const addFAQ = () => {
    setFormData(prev => ({
      ...prev,
      faqs: [...prev.faqs, { question: '', answer: '' }]
    }));
  };

  const removeFAQ = (index: number) => {
    setFormData(prev => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index)
    }));
  };

  const addHowToUse = () => {
    setFormData(prev => ({
      ...prev,
      howToUse: [...prev.howToUse, { image: '', text: '' }]
    }));
  };

  const removeHowToUse = (index: number) => {
    setFormData(prev => ({
      ...prev,
      howToUse: prev.howToUse.filter((_, i) => i !== index)
    }));
  };

  const addKeyIngredient = () => {
    setFormData(prev => ({
      ...prev,
      keyIngredients: [...prev.keyIngredients, { image: '', text: '' }]
    }));
  };

  const removeKeyIngredient = (index: number) => {
    setFormData(prev => ({
      ...prev,
      keyIngredients: prev.keyIngredients.filter((_, i) => i !== index)
    }));
  };

  const addIngredient = () => {
    if (newIngredient.trim()) {
      setFormData(prev => ({
        ...prev,
        ingredients: [...prev.ingredients, newIngredient.trim()]
      }));
      setNewIngredient('');
    }
  };

  const removeIngredient = (index: number) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Product Images</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">Click to upload product images</p>
                </div>
              </div>
              
              <div>
                <Label htmlFor="title">Product Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g., Neem & Turmeric Face Wash"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value, subcategory: '' }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subcategory">Subcategory</Label>
                  <Select 
                    value={formData.subcategory} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, subcategory: value }))}
                    disabled={!formData.category}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedCategory?.subcategories.map(subcategory => (
                        <SelectItem key={subcategory.id} value={subcategory.id}>
                          {subcategory.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="skinType">Skin Type</Label>
                <Select value={formData.skinType} onValueChange={(value) => setFormData(prev => ({ ...prev, skinType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select skin type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Skin Types</SelectItem>
                    <SelectItem value="oily">Oily Skin</SelectItem>
                    <SelectItem value="dry">Dry Skin</SelectItem>
                    <SelectItem value="combination">Combination Skin</SelectItem>
                    <SelectItem value="sensitive">Sensitive Skin</SelectItem>
                    <SelectItem value="normal">Normal Skin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  value={formData.shortDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
                  placeholder="Brief description of the product..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mrp">MRP (₹)</Label>
                  <Input
                    id="mrp"
                    type="number"
                    value={formData.mrp}
                    onChange={(e) => setFormData(prev => ({ ...prev, mrp: e.target.value }))}
                    placeholder="999"
                  />
                </div>
                <div>
                  <Label htmlFor="discountedPrice">Discounted Price (₹)</Label>
                  <Input
                    id="discountedPrice"
                    type="number"
                    value={formData.discountedPrice}
                    onChange={(e) => setFormData(prev => ({ ...prev, discountedPrice: e.target.value }))}
                    placeholder="799"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Size Variations</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addVariation}>
                    <Plus className="w-4 h-4 mr-1" />
                    Add Variation
                  </Button>
                </div>
                {formData.variations.map((variation, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <Input
                      placeholder="Size (e.g., 100ml)"
                      value={variation.size}
                      onChange={(e) => {
                        const newVariations = [...formData.variations];
                        newVariations[index].size = e.target.value;
                        setFormData(prev => ({ ...prev, variations: newVariations }));
                      }}
                    />
                    <Input
                      placeholder="Price (₹)"
                      value={variation.price}
                      onChange={(e) => {
                        const newVariations = [...formData.variations];
                        newVariations[index].price = e.target.value;
                        setFormData(prev => ({ ...prev, variations: newVariations }));
                      }}
                    />
                    {formData.variations.length > 1 && (
                      <Button type="button" variant="outline" size="sm" onClick={() => removeVariation(index)}>
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Subscription Offer */}
          <Card>
            <CardHeader>
              <CardTitle>Subscription Offer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Subscription Title"
                value={formData.subscription.title}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  subscription: { ...prev.subscription, title: e.target.value }
                }))}
              />
              <Input
                placeholder="Subscription Subheading"
                value={formData.subscription.subheading}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  subscription: { ...prev.subscription, subheading: e.target.value }
                }))}
              />
              <Input
                placeholder="Subscription Pricing (₹)"
                value={formData.subscription.pricing}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  subscription: { ...prev.subscription, pricing: e.target.value }
                }))}
              />
            </CardContent>
          </Card>

          {/* Specialties */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Specialties</CardTitle>
                <Button type="button" variant="outline" size="sm" onClick={addSpecialty}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Specialty
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {formData.specialties.map((specialty, index) => (
                <div key={index} className="space-y-2 mb-4 p-4 border rounded">
                  <div className="flex justify-between items-center">
                    <Label>Specialty {index + 1}</Label>
                    {formData.specialties.length > 1 && (
                      <Button type="button" variant="outline" size="sm" onClick={() => removeSpecialty(index)}>
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <Input
                    placeholder="Image URL"
                    value={specialty.image}
                    onChange={(e) => {
                      const newSpecialties = [...formData.specialties];
                      newSpecialties[index].image = e.target.value;
                      setFormData(prev => ({ ...prev, specialties: newSpecialties }));
                    }}
                  />
                  <Textarea
                    placeholder="Specialty description"
                    value={specialty.text}
                    onChange={(e) => {
                      const newSpecialties = [...formData.specialties];
                      newSpecialties[index].text = e.target.value;
                      setFormData(prev => ({ ...prev, specialties: newSpecialties }));
                    }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Product Details */}
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Detailed product information..."
                value={formData.productDetails}
                onChange={(e) => setFormData(prev => ({ ...prev, productDetails: e.target.value }))}
                rows={4}
              />
            </CardContent>
          </Card>

          {/* Ingredients */}
          <Card>
            <CardHeader>
              <CardTitle>Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Add ingredient"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
                />
                <Button type="button" onClick={addIngredient}>Add</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.ingredients.map((ingredient, index) => (
                  <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2">
                    <span className="text-sm">{ingredient}</span>
                    <button
                      type="button"
                      onClick={() => removeIngredient(index)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>FAQs</CardTitle>
                <Button type="button" variant="outline" size="sm" onClick={addFAQ}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add FAQ
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {formData.faqs.map((faq, index) => (
                <div key={index} className="space-y-2 mb-4 p-4 border rounded">
                  <div className="flex justify-between items-center">
                    <Label>FAQ {index + 1}</Label>
                    {formData.faqs.length > 1 && (
                      <Button type="button" variant="outline" size="sm" onClick={() => removeFAQ(index)}>
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <Input
                    placeholder="Question"
                    value={faq.question}
                    onChange={(e) => {
                      const newFaqs = [...formData.faqs];
                      newFaqs[index].question = e.target.value;
                      setFormData(prev => ({ ...prev, faqs: newFaqs }));
                    }}
                  />
                  <Textarea
                    placeholder="Answer"
                    value={faq.answer}
                    onChange={(e) => {
                      const newFaqs = [...formData.faqs];
                      newFaqs[index].answer = e.target.value;
                      setFormData(prev => ({ ...prev, faqs: newFaqs }));
                    }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Know Your Skin Type */}
          <Card>
            <CardHeader>
              <CardTitle>Know Your Skin Type</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Skin type guide image URL"
                value={formData.skinTypeImage}
                onChange={(e) => setFormData(prev => ({ ...prev, skinTypeImage: e.target.value }))}
              />
            </CardContent>
          </Card>

          {/* How to Use */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>How to Use</CardTitle>
                <Button type="button" variant="outline" size="sm" onClick={addHowToUse}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Step
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {formData.howToUse.map((step, index) => (
                <div key={index} className="space-y-2 mb-4 p-4 border rounded">
                  <div className="flex justify-between items-center">
                    <Label>Step {index + 1}</Label>
                    {formData.howToUse.length > 1 && (
                      <Button type="button" variant="outline" size="sm" onClick={() => removeHowToUse(index)}>
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <Input
                    placeholder="Step image URL"
                    value={step.image}
                    onChange={(e) => {
                      const newSteps = [...formData.howToUse];
                      newSteps[index].image = e.target.value;
                      setFormData(prev => ({ ...prev, howToUse: newSteps }));
                    }}
                  />
                  <Textarea
                    placeholder="Step description"
                    value={step.text}
                    onChange={(e) => {
                      const newSteps = [...formData.howToUse];
                      newSteps[index].text = e.target.value;
                      setFormData(prev => ({ ...prev, howToUse: newSteps }));
                    }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Key Ingredients */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Key Ingredients</CardTitle>
                <Button type="button" variant="outline" size="sm" onClick={addKeyIngredient}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Ingredient
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {formData.keyIngredients.map((ingredient, index) => (
                <div key={index} className="space-y-2 mb-4 p-4 border rounded">
                  <div className="flex justify-between items-center">
                    <Label>Key Ingredient {index + 1}</Label>
                    {formData.keyIngredients.length > 1 && (
                      <Button type="button" variant="outline" size="sm" onClick={() => removeKeyIngredient(index)}>
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <Input
                    placeholder="Ingredient image URL"
                    value={ingredient.image}
                    onChange={(e) => {
                      const newIngredients = [...formData.keyIngredients];
                      newIngredients[index].image = e.target.value;
                      setFormData(prev => ({ ...prev, keyIngredients: newIngredients }));
                    }}
                  />
                  <Textarea
                    placeholder="Ingredient description"
                    value={ingredient.text}
                    onChange={(e) => {
                      const newIngredients = [...formData.keyIngredients];
                      newIngredients[index].text = e.target.value;
                      setFormData(prev => ({ ...prev, keyIngredients: newIngredients }));
                    }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button className="bg-gradient-to-r from-[#0fa1b8] to-[#06b6d4]">Save Product</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
