
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Mail, Phone, Eye, Edit } from 'lucide-react';

const customers = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@email.com', phone: '+1 (555) 123-4567', orders: 12, totalSpent: '$1,245.00', joinDate: '2023-06-15', status: 'Active' },
  { id: 2, name: 'Emma Davis', email: 'emma@email.com', phone: '+1 (555) 234-5678', orders: 8, totalSpent: '$856.50', joinDate: '2023-08-22', status: 'Active' },
  { id: 3, name: 'Michael Brown', email: 'michael@email.com', phone: '+1 (555) 345-6789', orders: 5, totalSpent: '$423.75', joinDate: '2023-09-10', status: 'Active' },
  { id: 4, name: 'Jessica Wilson', email: 'jessica@email.com', phone: '+1 (555) 456-7890', orders: 15, totalSpent: '$2,103.25', joinDate: '2023-04-03', status: 'VIP' },
  { id: 5, name: 'David Lee', email: 'david@email.com', phone: '+1 (555) 567-8901', orders: 3, totalSpent: '$234.50', joinDate: '2023-11-18', status: 'New' },
  { id: 6, name: 'Sophie Miller', email: 'sophie@email.com', phone: '+1 (555) 678-9012', orders: 0, totalSpent: '$0.00', joinDate: '2024-01-05', status: 'Inactive' },
];

export const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP': return 'bg-purple-100 text-purple-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-600 mt-1">Manage your customer relationships</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Mail className="w-4 h-4 mr-2" />
          Send Campaign
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">2,345</p>
            <p className="text-sm text-gray-600">Total Customers</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">1,234</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">156</p>
            <p className="text-sm text-gray-600">VIP Members</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">89</p>
            <p className="text-sm text-gray-600">New This Month</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Customer</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Contact</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Orders</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Total Spent</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Join Date</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-medium">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">{customer.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-gray-900">{customer.email}</p>
                      <p className="text-sm text-gray-600">{customer.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{customer.orders}</td>
                  <td className="py-4 px-6 font-medium text-gray-900">{customer.totalSpent}</td>
                  <td className="py-4 px-6 text-gray-600">{customer.joinDate}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(customer.status)}`}>
                      {customer.status}
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
                      <Button variant="ghost" size="sm">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
