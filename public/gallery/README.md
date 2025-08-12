# Gallery Image Organization Guide

## Directory Structure
```
public/gallery/
├── teamphoto.jpg (Already added - your team photo)
├── categories/
│   ├── conservation/
│   ├── education/
│   ├── youth/
│   ├── energy/
│   ├── agriculture/
│   ├── water/
│   ├── wildlife/
│   └── leadership/
└── README.md (this file)
```

## How to Add Your Images

### 1. Create Category Folders
Create subfolders in the `categories` directory for different types of projects:
- `conservation/` - Tree planting, habitat restoration, cleanup activities
- `education/` - Training sessions, workshops, awareness campaigns
- `youth/` - Youth programs, school visits, children's activities
- `energy/` - Solar installations, renewable energy projects
- `agriculture/` - Sustainable farming, permaculture projects
- `water/` - Clean water projects, well drilling, water conservation
- `wildlife/` - Wildlife protection, biodiversity projects
- `leadership/` - Leadership training, community meetings

### 2. Image Naming Convention
Use descriptive names for your images:
- `conservation/tree-planting-nakuru-2024.jpg`
- `education/waste-management-workshop-kibera.jpg`
- `youth/environmental-club-school-visit.jpg`

### 3. Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 1200x800px or larger for best quality
- **File Size**: Keep under 2MB for fast loading
- **Aspect Ratio**: Square (1:1) works best for the grid layout

### 4. Update Gallery Component
After adding your images, update the `galleryImages` array in:
`src/components/Gallery.tsx`

Replace the Unsplash URLs with your local image paths:
```javascript
{
  src: '/gallery/categories/conservation/your-image.jpg',
  alt: 'Description of your image',
  title: 'Project Title',
  description: 'Detailed description of the project and its impact',
  category: 'Conservation'
}
```

### 5. Image Categories
Current categories in the gallery:
- Conservation
- Education  
- Youth
- Energy
- Agriculture
- Water
- Wildlife
- Leadership
- Team

You can add more categories as needed by updating both the folder structure and the Gallery component.

## Tips for Best Results
1. Use high-quality, well-lit photos
2. Include people in action shots when possible
3. Show before/after results of your projects
4. Capture diverse activities and locations
5. Include photos from different time periods to show growth

## Current Status
- ✅ Gallery component created with responsive design
- ✅ Navigation menu updated with Gallery link
- ✅ Dedicated gallery page created at `/gallery`
- ✅ Team photo added as example
- ⏳ Waiting for your project images to be added

Once you add your images following this guide, the gallery will showcase your real impact stories instead of placeholder images.
