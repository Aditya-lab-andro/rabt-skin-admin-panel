
import { StatsCard } from '@/components/StatsCard';
import { DashboardChart } from '@/components/DashboardChart';
import { Package, ShoppingCart, Users, TrendingUp } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your store.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Products"
          value="1,234"
          change="+12% from last month"
          changeType="positive"
          icon={Package}
        />
        <StatsCard
          title="Total Orders"
          value="856"
          change="+8% from last month"
          changeType="positive"
          icon={ShoppingCart}
        />
        <StatsCard
          title="Total Customers"
          value="2,345"
          change="+15% from last month"
          changeType="positive"
          icon={Users}
        />
        <StatsCard
          title="Revenue"
          value="$48,250"
          change="+23% from last month"
          changeType="positive"
          icon={TrendingUp}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardChart />
        
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {[
              { id: '#1234', customer: 'Sarah Johnson', product: 'Vitamin C Serum', amount: '$45.00', status: 'Completed' },
              { id: '#1235', customer: 'Emma Davis', product: 'Hyaluronic Moisturizer', amount: '$32.00', status: 'Processing' },
              { id: '#1236', customer: 'Michael Brown', product: 'Gentle Cleanser', amount: '$28.00', status: 'Shipped' },
              { id: '#1237', customer: 'Jessica Wilson', product: 'Anti-Aging Cream', amount: '$65.00', status: 'Pending' },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900">{order.customer}</p>
                  <p className="text-sm text-gray-600">{order.product}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{order.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
