import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">
          Clothing Marketplace
        </h1>
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li className="hover:text-indigo-600 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer transition-colors">Shop</li>
          <li className="hover:text-indigo-600 cursor-pointer transition-colors">Sell</li>
          <li className="hover:text-indigo-600 cursor-pointer transition-colors">About</li>
        </ul>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Buy &amp; Sell Clothing — Effortlessly
      </h2>
      <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
        Discover thousands of fashion items or list your own wardrobe for sale.
        Fast, secure, and stylish.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-colors">
          Shop Now
        </button>
        <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-colors">
          Start Selling
        </button>
      </div>
    </section>
  );
}

const SAMPLE_PRODUCTS = [
  { id: 1, name: 'Classic White Tee', price: 29, category: 'T-Shirts', emoji: '👕' },
  { id: 2, name: 'Slim Fit Jeans', price: 59, category: 'Pants', emoji: '👖' },
  { id: 3, name: 'Summer Dress', price: 49, category: 'Dresses', emoji: '👗' },
  { id: 4, name: 'Leather Jacket', price: 149, category: 'Jackets', emoji: '🧥' },
  { id: 5, name: 'Running Sneakers', price: 89, category: 'Shoes', emoji: '👟' },
  { id: 6, name: 'Knit Sweater', price: 69, category: 'Tops', emoji: '🧶' },
];

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden">
      <div className="bg-gray-100 flex items-center justify-center h-48 text-7xl">
        {product.emoji}
      </div>
      <div className="p-4">
        <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="text-gray-800 font-semibold mt-1">{product.name}</h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-indigo-600 font-bold text-lg">${product.price}</span>
          <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SAMPLE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function CategoryBanner() {
  const categories = ['Men', 'Women', 'Kids', 'Accessories', 'Sale'];
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors"
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-12">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Clothing Marketplace. All rights reserved.
      </p>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroBanner />
      <CategoryBanner />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default App;
