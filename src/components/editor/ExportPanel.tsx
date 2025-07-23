import React from 'react';
import { Button } from '../ui/button';
import { Download, Save } from 'lucide-react';
import html2canvas from 'html2canvas-pro';

export const ExportPanel: React.FC = () => {
  const downloadAsPNG = async () => {
    const cardElement = document.getElementById('card-preview');
    if (!cardElement) {
      console.error('Card element not found');
      return;
    }

    try {
      const canvas = await html2canvas(cardElement, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      const link = document.createElement('a');
      link.download = 'conference-card.png';
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Error generating PNG:', error);
    }
  };

  const downloadAsPDF = async () => {
    const cardElement = document.getElementById('card-preview');
    if (!cardElement) {
      console.error('Card element not found');
      return;
    }

    try {
      const canvas = await html2canvas(cardElement, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      // Create a simple PDF by putting the image in a new window for printing
      const imgData = canvas.toDataURL('image/png');
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head><title>Conference Card</title></head>
            <body style="margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;">
              <img src="${imgData}" style="max-width:100%;max-height:100%;" />
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Export Your Card</h3>
        <div className="space-y-4">
          <Button 
            onClick={downloadAsPNG}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl"
          >
            <Download className="w-5 h-5 mr-2" />
            Download as PNG
          </Button>
          <Button 
            onClick={downloadAsPDF}
            variant="outline" 
            className="w-full py-4 rounded-xl border-2 hover:bg-gray-50"
          >
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
