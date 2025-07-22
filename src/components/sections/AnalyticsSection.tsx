import { BarChart3, TrendingUp, Users, MapPin, Clock, Smartphone } from 'lucide-react';

export const AnalyticsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 text-gray-900">
            Powerful 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {' '}Analytics & Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Track engagement, monitor usage, and gain valuable insights into your events 
            with our comprehensive analytics dashboard.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Analytics Features */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-900">
                  Real-Time QR Analytics
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Track when and where your QR codes are scanned, identify popular networking 
                  times, and understand attendee behavior patterns.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-900">
                  Engagement Metrics
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Monitor attendee engagement levels, track popular sessions, 
                  and identify key networking opportunities at your events.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-900">
                  Location Intelligence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Understand geographic distribution of your attendees and optimize 
                  future event locations based on participation data.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-900">
                  Growth Tracking
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Monitor event growth over time, compare performance across multiple events, 
                  and identify trends to improve future planning.
                </p>
              </div>
            </div>
          </div>

          {/* Mock Analytics Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-purple-100 text-sm">Tech Conference 2024</p>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Total Scans</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-900">1,247</div>
                    <div className="text-xs text-blue-600">+23% vs last event</div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Peak Time</span>
                    </div>
                    <div className="text-lg font-bold text-green-900">2:30 PM</div>
                    <div className="text-xs text-green-600">Coffee break</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-gray-50 rounded-xl p-4 h-32 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-gray-500">
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-sm">Engagement Over Time</span>
                  </div>
                </div>

                {/* Device Stats */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Device Usage</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Mobile</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-12 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">78%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      <span className="text-sm text-gray-700">Desktop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-4 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">22%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Enterprise Analytics Features */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-poppins mb-4 text-gray-900">
              Enterprise Analytics Features
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced insights and reporting capabilities for large-scale events 
              and multi-event organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold font-poppins mb-2 text-gray-900">
                Custom Reports
              </h4>
              <p className="text-gray-600 text-sm">
                Generate detailed reports with custom metrics, export to PDF/Excel, 
                and schedule automated delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold font-poppins mb-2 text-gray-900">
                Predictive Analytics
              </h4>
              <p className="text-gray-600 text-sm">
                AI-powered insights to predict attendance patterns, optimize event 
                timing, and improve future planning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold font-poppins mb-2 text-gray-900">
                Multi-Event Tracking
              </h4>
              <p className="text-gray-600 text-sm">
                Compare performance across multiple events, track attendee journey, 
                and build comprehensive event portfolios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
