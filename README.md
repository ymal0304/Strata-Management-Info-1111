# Strata Management System

A comprehensive web application for managing strata-titled apartment buildings in New South Wales, built with Next.js and deployed on Vercel.

## Features

- **Committee Management**: Track committee members, roles, and upcoming meetings
- **Financial Management**: Monitor income, expenses, and levy payments
- **Maintenance Requests**: Submit and track maintenance requests for common areas
- **Document Management**: Store and access important building documents
- **Communication Portal**: Facilitate communication between residents and committee members

## Technology Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Database**: (To be implemented)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

The application is configured for deployment on Vercel with the following settings:

- Region: Sydney (syd1)
- Framework: Next.js
- Build Command: `next build`
- Environment Variables: Configured in Vercel dashboard

## Project Structure

```
strata-management/
├── app/
│   ├── components/     # Reusable components
│   ├── committee/      # Committee management page
│   ├── finances/       # Financial management page
│   ├── maintenance/    # Maintenance requests page
│   ├── documents/      # Document management page
│   ├── communication/  # Communication portal page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/             # Static assets
├── vercel.json         # Vercel configuration
└── package.json        # Project dependencies
```

## Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_API_URL=https://api.strata-management.example.com
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
