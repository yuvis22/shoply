# Shoply

A modern, full-stack e-commerce app built with Next.js, Clerk authentication, MongoDB, AWS S3, and a beautiful, responsive UI.

## Features

- User authentication (Clerk)
- Product catalog with dynamic MongoDB backend
- Product image uploads to AWS S3
- Protected routes (cart, checkout, wishlist, order history, profile)
- Admin-only product creation
- Responsive, modern design with Tailwind CSS and Lucide icons
- Role-based navigation

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/shoply.git
cd shoply
```

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Set up environment variables

Create a `.env` file in the root with:

```
MONGODB_URI=your_mongodb_uri
MONGODB_DB=your_db_name
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=your_aws_region
AWS_S3_BUCKET=your_s3_bucket
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### 4. Run the app

```bash
npm run dev
```

## CI/CD

- GitHub Actions workflow runs build and lint on every push/PR to `main`.

