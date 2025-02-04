# Uzinfocom Task 2

A responsive React application built with TypeScript and Tailwind CSS.

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS 4.0
- React Query (TanStack Query)
- Axios
- Vite

## Features

- Responsive design (min-width: 350px)
- API integration with Python backend
- Dynamic form with user and category selection
- Interactive table with sorting functionality
- Real-time count updates
- Vertical and horizontal totals calculation

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## API Endpoints

The application uses the following endpoints:

- GET: https://python-api-task.onrender.com/categories
- GET: https://python-api-task.onrender.com/users
- GET: https://python-api-task.onrender.com/counts
- PATCH: https://python-api-task.onrender.com/counts

## Project Structure

- `/src/components` - React components
- `/src/services` - API services
- `/src/assets` - Static assets
- `/src/types` - TypeScript types

## Deployment

The application can be deployed to platforms like Netlify, Vercel, or Render.
