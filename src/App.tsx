import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo"

export default function FashionStore() {
  return (
    <div className="bg-[#f5f2e8] min-h-screen font-sans">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="md:text-3xl text-[#5c7c54]" style={{fontFamily:"Original,sans-serif"}}>FashionNation</div>
        <nav>
          <ul className="flex space-x-4">
            {["Home", "Store", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <a href="#abt" className="text-[#5c7c54] hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative mb-8 max-w-9xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center justify-center bg-[#5c7c54] p-8 md:p-16">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{fontFamily:"Satoshi,sans-serif"}}>Shop Now</h1>
              <p className="text-white text-lg mb-6" style={{fontFamily:"Satoshi,sans-serif"}}>Discover the latest fashion trends and elevate your style.</p>
              <a href="/store" className="inline-block bg-white text-[#5c7c54] px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300" style={{fontFamily:"Satoshi,sans-serif"}}>
                Explore Collection
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src="/assets/bgimg.png"
              alt="Fashion showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="max-w-4xl mx-auto mb-16" style={{fontFamily:"Satoshi,sans-serif"}}>
        <h2 className="text-2xl font-semibold mb-4 text-[#5c7c54] text-center">Trending</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Top 10 Travel Outfits", image: "/assets/trend1.png" },
            { title: "Emerging Female Fashion Trends", image: "/assets/trend2.png" },
            { title: "Mega Sale with surprising offers", image: "/assets/trend3.png" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md mx-4">
              <img src={item.image} alt={item.title} width={200} height={200} className="w-full h-68 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-[#5c7c54]">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">Read More</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="/store" className="inline-block bg-[#5c7c54] text-white px-6 py-2 rounded-full hover:bg-[#4a6343]">
            SEE ALL
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto mb-16" style={{fontFamily:"Satoshi,sans-serif"}}>
        <h2 className="md:text-5xl text-2xl font-semibold mb-8 text-center text-[#5c7c54]">What Our Customers Say</h2>
        <InfiniteMovingCardsDemo/>
      </section>

      {/* Visit Our Store Section */}
      <section className="bg-[#5c7c54] text-white py-12" style={{fontFamily:"Satoshi,sans-serif"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">VISIT OUR STORE</h2>
          <p className="mb-6">123 Fashion Street, Styleville, ST 12345</p>
          <button className="bg-white text-[#5c7c54] px-6 py-2 rounded-full hover:bg-gray-100">
            Get Directions
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e0dcd0] py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#5c7c54] mb-4 md:mb-0">© 2023 FashionNation. All rights reserved.</div>
          <div className="flex space-x-4">
            {["Facebook", "Instagram", "Twitter"].map((social) => (
              <a key={social} href="#soc" className="text-[#5c7c54] hover:underline">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}