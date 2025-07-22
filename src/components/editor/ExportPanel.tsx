import React from 'react';
import { Button } from '../ui/button';
import { Download, Save } from 'lucide-react';

export const ExportPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Export Your Card</h3>
        <div className="space-y-4">
          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl">
            <Download className="w-5 h-5 mr-2" />
            Download as PNG
          </Button>
          <Button variant="outline" className="w-full py-4 rounded-xl border-2 hover:bg-gray-50">
            <Download className="w-5 h-5 mr-2" />
            Download as PDF
          </Button>
          <Button variant="outline" className="w-full py-4 rounded-xl border-2 hover:bg-gray-50">
            <Save className="w-5 h-5 mr-2" />
            Save Project
          </Button>
        </div>
      </div>
    </div>
  );
};
