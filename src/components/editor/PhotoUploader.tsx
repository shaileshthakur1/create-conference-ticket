import React from 'react';
import { Upload } from 'lucide-react';

interface PhotoUploaderProps {
  photo: string | null;
  onPhotoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  photo,
  onPhotoUpload
}) => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
      <label className="block text-sm font-semibold text-gray-800 mb-4">
        Profile Photo
      </label>
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-white shadow-lg">
          {photo ? (
            <img src={photo} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <Upload className="w-8 h-8 text-purple-400" />
          )}
        </div>
        <label className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all">
          <input
            type="file"
            accept="image/*"
            onChange={onPhotoUpload}
            className="hidden"
          />
          Upload Photo
        </label>
      </div>
    </div>
  );
};
