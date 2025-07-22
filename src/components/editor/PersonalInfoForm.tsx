import React from 'react';
import { Settings } from 'lucide-react';

interface CardData {
  name: string;
  title: string;
  company: string;
  eventName: string;
  eventLocation: string;
  role: string;
}

interface PersonalInfoFormProps {
  cardData: CardData;
  onInputChange: (field: keyof CardData, value: string) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  cardData,
  onInputChange
}) => {
  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 gap-4">
        {[
          { label: 'Full Name', field: 'name' as keyof CardData },
          { label: 'Job Title', field: 'title' as keyof CardData },
          { label: 'Company', field: 'company' as keyof CardData }
        ].map((item) => (
          <div key={item.field}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {item.label}
            </label>
            <input
              type="text"
              value={cardData[item.field]}
              onChange={(e) => onInputChange(item.field, e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            />
          </div>
        ))}
      </div>

      {/* Event Information */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5 text-blue-600" />
          Event Details
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Name
            </label>
            <input
              type="text"
              value={cardData.eventName}
              onChange={(e) => onInputChange('eventName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={cardData.eventLocation}
              onChange={(e) => onInputChange('eventLocation', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role
            </label>
            <select
              value={cardData.role}
              onChange={(e) => onInputChange('role', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
            >
              <option value="SPEAKER">Speaker</option>
              <option value="ATTENDEE">Attendee</option>
              <option value="ORGANIZER">Organizer</option>
              <option value="SPONSOR">Sponsor</option>
              <option value="VIP">VIP</option>
              <option value="STAFF">Staff</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
