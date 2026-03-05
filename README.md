# PiCode Solutions Marketing Website

Welcome to the PiCode Solutions marketing website project! This project is built using Next.js and Tailwind CSS, providing a modern and responsive web experience.

## Project Structure

The project is organized as follows:

```
picode-solutions
├── src
│   ├── app
│   │   ├── layout.tsx         # Root layout of the application
│   │   ├── page.tsx           # Home page of the website
│   │   └── globals.css        # Global styles including Tailwind CSS
│   ├── components
│   │   ├── header.tsx         # Header component with navigation
│   │   └── footer.tsx         # Footer component with copyright and links
│   └── lib
│       └── site.ts            # Configuration object for marketing content
├── public                      # Static assets (images, icons, etc.)
├── package.json                # npm configuration file
├── tsconfig.json              # TypeScript configuration file
├── next.config.js             # Next.js configuration file
├── tailwind.config.js         # Tailwind CSS configuration file
├── postcss.config.js          # PostCSS configuration file
└── README.md                  # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd picode-solutions
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Features

- Responsive design using Tailwind CSS
- Dynamic content management through the `src/lib/site.ts` configuration
- Modular components for easy maintenance and scalability

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.