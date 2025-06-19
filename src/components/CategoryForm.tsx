
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, X, Upload } from 'lucide-react';

interface Subcategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface CategoryFormData {
  name: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

export const CategoryForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState<CategoryFormData>({
    name: '',
    description: '',
    image: '',
    subcategories: []
  });

  const addSubcategory = () => {
    const newSubcategory: Subcategory = {
      id: Date.now().toString(),
      name: '',
      description: '',
      image: ''
    };
    setFormData(prev => ({
      ...prev,
      subcategories: [...prev.subcategories, newSubcategory]
    }));
  };

  const removeSubcategory = (id: string) => {
    setFormData(prev => ({
      ...prev,
      subcategories: prev.subcategories.filter(sub => sub.id !== id)
    }));
  };

  const updateSubcategory = (id: string, field: keyof Subcategory, value: string) => {
    setFormData(prev => ({
      ...prev,
      subcategories: prev.subcategories.map(sub =>
        sub.id === id ? { ...sub, [field]: value } : sub
      )
    }));
  };

  const handleSubmit = () => {
    console.log('Category data:', formData);
    // Here you would typically save the category data
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Category</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Main Category Information */}
          <Card>
            <CardHeader>
              <CardTitle>Category Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Category Image</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">Click to upload category image</p>
                  <Input
                    className="mt-2"
                    placeholder="Or paste image URL"
                    value={formData.image}
                    onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="categoryName">Category Name</Label>
                <Input
                  id="categoryName"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Ayurvedic Cleansers"
                />
              </div>

              <div>
                <Label htmlFor="categoryDescription">Category Description</Label>
                <Textarea
                  id="categoryDescription"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief description of the category..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Subcategories */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Subcategories</CardTitle>
                <Button type="button" variant="outline" size="sm" onClick={addSubcategory}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Subcategory
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {formData.subcategories.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No subcategories added yet</p>
              ) : (
                <div className="space-y-4">
                  {formData.subcategories.map((subcategory) => (
                    <div key={subcategory.id} className="p-4 border rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <Label className="font-medium">Subcategory</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeSubcategory(subcategory.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div>
                        <Label className="text-sm">Subcategory Image</Label>
                        <div className="border-2 border-dashed border-gray-200 rounded p-3 text-center">
                          <Upload className="w-6 h-6 mx-auto text-gray-400 mb-1" />
                          <Input
                            className="mt-1"
                            placeholder="Image URL"
                            value={subcategory.image}
                            onChange={(e) => updateSubcategory(subcategory.id, 'image', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm">Subcategory Name</Label>
                        <Input
                          placeholder="e.g., Face Cleansers"
                          value={subcategory.name}
                          onChange={(e) => updateSubcategory(subcategory.id, 'name', e.target.value)}
                        />
                      </div>

                      <div>
                        <Label className="text-sm">Subcategory Description</Label>
                        <Textarea
                          placeholder="Brief description..."
                          value={subcategory.description}
                          onChange={(e) => updateSubcategory(subcategory.id, 'description', e.target.value)}
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button className="bg-gradient-to-r from-[#0fa1b8] to-[#06b6d4]" onClick={handleSubmit}>
              Save Category
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
