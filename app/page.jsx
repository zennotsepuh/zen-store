import Image from 'next/image'

const products = [
  { id: 1, name: "Wireless Headphones", price: 49.99, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
  { id: 2, name: "Smart Watch", price: 89.99, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
  { id: 3, name: "Minimalist Sneakers", price: 120.00, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
  { id: 4, name: "Travel Backpack", price: 65.50, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-2xl tracking-tight">ZENN</div>
            <div className="hidden md:block space-x-8 font-medium text-gray-600">
              <a href="#" className="hover:text-black">New Arrivals</a>
              <a href="#" className="hover:text-black">Men</a>
              <a href="#" className="hover:text-black">Women</a>
              <a href="#" className="hover:text-black">Accessories</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-black">Login</button>
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">Cart (0)</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between lg:items-center">
          <div className="max-w-xl lg:max-w-lg">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Style That <br /> Speaks Volumes.
            </h1>
            <p className="mt-4 text-lg text-gray-500">Premium gear for the modern hustler. Shop the latest drop before it's gone.</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800">Shop Now</a>
              <a href="#" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50">Learn More</a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:ml-10">
            <Image className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" alt="Hero" width={500} height={500} />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="relative h-64 w-full">
                  <Image src={product.img} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-xl font-bold text-gray-900">${product.price}</p>
                  <button className="mt-3 w-full bg-black text-white py-2 rounded-full text-sm hover:bg-gray-800">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">ZENN</h3>
            <p className="mt-2 text-sm text-gray-500">Elevating everyday life through design.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Shop</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>New</li>
              <li>Bestsellers</li>
              <li>Sale</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Support</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>Shipping</li>
              <li>Returns</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Follow</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          &copy; 2026 ZENN Store. All rights reserved. (Clone by DanzModss)
        </div>
      </footer>
    </div>
  )
}
