
import { StatsCard } from '@/components/StatsCard';
import { DashboardChart } from '@/components/DashboardChart';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { GradientCard } from '@/components/ui/gradient-card';
import { 
  TrendingUp, 
  Package, 
  Users, 
  ShoppingCart,
  DollarSign,
  Activity
} from 'lucide-react';

export const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$54,239',
      change: '+12.5% from last month',
      changeType: 'positive' as const,
      icon: DollarSign
    },
    {
      title: 'Total Orders',
      value: '1,429',
      change: '+8.2% from last month', 
      changeType: 'positive' as const,
      icon: ShoppingCart
    },
    {
      title: 'Active Products',
      value: '247',
      change: '+3 new products',
      changeType: 'positive' as const,
      icon: Package
    },
    {
      title: 'Active Customers',
      value: '892',
      change: '+15.3% from last month',
      changeType: 'positive' as const,
      icon: Users
    }
  ];

  return (
    <AnimatedBackground>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0fa1b8] to-[#06b6d4] bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-200">
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GradientCard gradient>
            <DashboardChart />
          </GradientCard>
          
          <GradientCard gradient className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-[#0fa1b8]" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[
                { action: 'New order placed', time: '2 minutes ago', status: 'success' },
                { action: 'Product added to inventory', time: '15 minutes ago', status: 'info' },
                { action: 'Customer registered', time: '1 hour ago', status: 'success' },
                { action: 'Low stock alert', time: '2 hours ago', status: 'warning' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50/50">
                  <div>
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'info' ? 'bg-[#0fa1b8]' :
                    'bg-yellow-500'
                  }`} />
                </div>
              ))}
            </div>
          </GradientCard>
        </div>

        {/* Quick Actions */}
        <GradientCard className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Add New Product', icon: Package },
              { label: 'View Orders', icon: ShoppingCart },
              { label: 'Manage Categories', icon: TrendingUp },
              { label: 'Send Newsletter', icon: Users }
            ].map((action, index) => (
              <button
                key={index}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-[#0fa1b8] to-[#06b6d4] text-white rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <action.icon className="w-4 h-4 mr-2" />
                {action.label}
              </button>
            ))}
          </div>
        </GradientCard>
      </div>
    </AnimatedBackground>
  );
};
