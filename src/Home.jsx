import { useState } from 'react'
import { FiMapPin, FiDollarSign, FiArrowRight } from 'react-icons/fi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'

const Home = () => {
  // Add state management
  const [activeTab, setActiveTab] = useState('Buy')
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [priceRange, setPriceRange] = useState('')

  // Featured properties data
  const featuredProperties = [
    {
      id: 1,
      price: '2,500,000',
      type: 'Premium Office Space',
      location: 'Financial District, NYC',
      image: '/property1.jpg'
    },
    {
      id: 2,
      price: '1,800,00',
      type: 'Luxury Apartment',
      location: 'Upper East Side, NYC',
      image: '/property2.jpg'
    },
    {
      id: 3,
      price: '3,200,000',
      type: 'Modern Penthouse',
      location: 'Downtown, NYC',
      image: '/property3.jpg'
    },
    {
      id: 4,
      price: '2,100,000',
      type: 'Commercial Space',
      location: 'Midtown, NYC',
      image: '/property4.jpg'
    }
  ]

  // Handle search submission
  const handleSearch = () => {
    console.log('Search params:', { activeTab, location, propertyType, priceRange })
    // Add your search logic here
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-[#F8FAFB]">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-12">
              {/* Status Badge */}
              <div className="inline-flex">
                <div className="bg-[#1A1A1A] px-4 py-2 rounded-lg">
                  <span className="text-white text-sm font-medium tracking-wide">
                    Premier Real Estate Platform
                  </span>
                </div>
              </div>

              {/* Main Content - Same as before */}
              <div className="space-y-6">
                <h1 className="text-[#1A1A1A] text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
                  Discover Your
                  <span className="block">Ideal Property</span>
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                  Access exclusive properties in prime locations. Experience seamless transactions with our professional real estate services.
                </p>
              </div>

              {/* Enhanced Search with State */}
              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 space-y-6 max-w-2xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#1A1A1A] font-medium">Property Search</h3>
                  <div className="flex gap-3">
                    {['Buy', 'Rent'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveTab(type)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all
                          ${activeTab === type 
                            ? 'bg-[#1A1A1A] text-white' 
                            : 'text-gray-500 hover:bg-gray-50'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm text-gray-600 font-medium">Location</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                      />
                      <FiMapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm text-gray-600 font-medium">Property Type</label>
                    <div className="relative">
                      <select 
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                      >
                        <option value="">All Types</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="commercial">Commercial</option>
                      </select>
                      <HiOutlineBuildingOffice2 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm text-gray-600 font-medium">Budget Range</label>
                    <div className="relative">
                      <select 
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                      >
                        <option value="">Any Range</option>
                        <option value="0-500000">$0 - $500,000</option>
                        <option value="500000-1000000">$500,000 - $1M</option>
                        <option value="1000000+">$1M+</option>
                      </select>
                      <FiDollarSign className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleSearch}
                  className="w-full bg-[#1A1A1A] text-white py-4 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2 group"
                >
                  <span className="font-medium">Search Properties</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Indicators - Same as before */}
              <div className="flex items-center gap-8">
                {[
                  { number: "15K+", label: "Properties Listed" },
                  { number: "10K+", label: "Successful Deals" },
                  { number: "100+", label: "Expert Agents" },
                ].map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-2xl font-semibold text-[#1A1A1A]">{stat.number}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Featured Properties */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                {featuredProperties.map((property) => (
                  <div
                    key={property.id}
                    className={`bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden
                      ${property.id % 2 === 0 ? 'translate-y-8' : ''}`}
                  >
                    <img
                      src={property.image}
                      alt={property.type}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[#1A1A1A] font-semibold">${property.price}</span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                          For {activeTab}
                        </span>
                      </div>
                      <h3 className="text-[#1A1A1A] font-medium">{property.type}</h3>
                      <p className="text-gray-500 text-sm flex items-center gap-1.5">
                        <FiMapPin className="text-gray-400" />
                        {property.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home