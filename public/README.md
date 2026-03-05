# Public Assets

Place static assets here. All files are served from the root URL.

## Folder Structure

```
public/
├── images/
│   ├── backgrounds/    # Abstract tech graphics, patterns
│   ├── work/           # Case study thumbnails & screenshots
│   └── team/           # Team photos
├── favicon.ico
└── og-image.png        # Social sharing image (1200x630)
```

## Usage

Reference images in code like:
```tsx
import Image from 'next/image';
<Image src="/images/backgrounds/cloud.svg" alt="" />
```

## Recommended Formats

- **Backgrounds**: SVG (scalable, small file size) or WebP
- **Photos**: WebP or optimized JPG
- **Icons**: SVG
