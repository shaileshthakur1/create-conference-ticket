export interface Font {
  name: string;
  class: string;
  style: string;
}

export const fonts: Font[] = [
  { name: 'Poppins', class: 'font-poppins', style: 'Modern Sans-Serif' },
  { name: 'Inter', class: 'font-inter', style: 'Clean & Readable' },
  { name: 'Playfair Display', class: 'font-playfair', style: 'Elegant Serif' },
  { name: 'Roboto', class: 'font-sans', style: 'Professional' },
  { name: 'Montserrat', class: 'font-mono', style: 'Contemporary' },
  { name: 'Open Sans', class: 'font-serif', style: 'Friendly' },
  { name: 'Lato', class: 'font-sans', style: 'Humanist' },
  { name: 'Raleway', class: 'font-sans', style: 'Sophisticated' },
  { name: 'Source Sans Pro', class: 'font-sans', style: 'Technical' },
  { name: 'Nunito', class: 'font-sans', style: 'Rounded & Warm' }
];