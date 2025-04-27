# 🌾 FarmBasket

**FarmBasket** is a modern, responsive e-commerce web application for browsing and purchasing fresh farm products like fruits, vegetables, nuts, and dry fruits.  
It offers a smooth user experience with secure authentication, dynamic content management, and a mobile-friendly design.

Built with:

- **Next.js 15** (App Router)
- **React 19**
- **Clerk** for authentication
- **Hygraph** (GraphQL CMS) for product data
- **Tailwind CSS** for styling

---

## 🚀 Features

- 🔒 **Authentication**: Sign up, Sign in, and User profile management using Clerk
- 🛒 **Shop by Categories**: Browse different product categories with icons
- 🥬 **Dynamic Inventory**: Products fetched from Hygraph via GraphQL
- 🖼️ **Detailed Product Pages**: View images, descriptions, and prices
- 📱 **Responsive Design**: Fully mobile-optimized using Tailwind CSS
- ⚡ **Fast Data Fetching**: Optimized API integration with `graphql-request`

---

## 🛠️ Tech Stack

| Technology                                                                                          | Purpose                                    |
| :-------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| [Next.js 15](https://nextjs.org/)                                                                   | Frontend framework (App Router)            |
| [React 19](https://react.dev/)                                                                      | UI components                              |
| [Clerk](https://clerk.com/)                                                                         | User authentication and session management |
| [Hygraph](https://hygraph.com/)                                                                     | Headless CMS for product content           |
| [GraphQL](https://graphql.org/) + [graphql-request](https://github.com/prisma-labs/graphql-request) | API queries                                |
| [Tailwind CSS](https://tailwindcss.com/)                                                            | Utility-first CSS styling                  |
| [Lucide React](https://lucide.dev/)                                                                 | Icon library                               |
| [Radix UI](https://www.radix-ui.com/)                                                               | Accessible UI components                   |

---

## 🛠 Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ArunVarma78/FarmBasket.git
cd farmbasket
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. 🔑 Environment Variables Setup

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:<Your Clerk frontend publishable key used for authentication.>
NEXT_PUBLIC_CLERK_SIGN_IN_URL:<Path to your custom sign-in page.>
NEXT_PUBLIC_CLERK_SIGN_UP_URL:<Path to your custom sign-up page.>
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL:<URL to redirect users after fallback from sign-in.>
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL:<URL to redirect users after fallback from sign-up.>
NEXT_PUBLIC_BACKEND_API_URL:<The URL of your backend GraphQL API that provides the farm product data.>

```

Replace the placeholders with your actual backend API URL and Clerk credentials.

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

```
farmbasket/
├── app/                      # Main Next.js app directory
│   ├── _components/          # Reusable React components (CategoryList, InventoryList, Header, etc.)
│   ├── _utils/               # Utility functions and API handlers (GlobalApi.js)
│   ├── (routes)/product/     # Dynamic product detail pages
│   ├── globals.css           # Global styles
│   ├── layout.js             # Root layout component
│   └── page.js               # Home page rendering categories and inventory
├── components/               # Additional UI components (e.g., UI primitives)
├── lib/                      # Utility libraries
├── public/                   # Static assets (images, logos)
├── .env.local                # Environment variables
├── next.config.mjs           # Next.js configuration
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

## 📢 Important Notes

- Authentication: Clerk manages all user authentication flows (sign up, sign in, and profile).
- Search: The search bar in the header is a placeholder; search functionality can be implemented later.
- Custom Button: The project expects a Button component inside components/ui/button.tsx. Ensure it's created or update accordingly.

---

## ✨ Future Improvements

- Full Shopping Cart functionality (Add to Cart, Remove, Checkout)
- Search and Filter Products
- Payment Gateway Integration
- Order History and User Dashboard
