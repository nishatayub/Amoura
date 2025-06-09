import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardNavbar from '../components/layout/DashboardNavbar'
import Footer from '../components/layout/Footer'

const SellerDashboard = () => {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddProduct, setShowAddProduct] = useState(false)
  const navigate = useNavigate()

  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Roses',
    images: null,
    stock: 1
  })

  const categories = ["Roses", "Lilies", "Tulips", "Sunflowers", "Orchids", "Carnations", "Mixed", "Tropical", "Seasonal", "Premium"]

  useEffect(() => {
    // Check if user is logged in and is a seller
    const userData = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    
    if (!userData || !token) {
      navigate('/')
      return
    }

    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== 'seller') {
      navigate('/')
      return
    }

    setUser(parsedUser)
    fetchSellerProducts()
  }, [navigate])

  const fetchSellerProducts = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('http://localhost:8080/api/products/seller/my-products', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      const data = await response.json()
      if (data.success) {
        setProducts(data.data)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    if (e.target.name === 'images') {
      setProductForm({
        ...productForm,
        images: e.target.files
      })
    } else {
      setProductForm({
        ...productForm,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleAddProduct = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const token = localStorage.getItem('token')
      const formData = new FormData()
      
      formData.append('name', productForm.name)
      formData.append('description', productForm.description)
      formData.append('price', productForm.price)
      formData.append('category', productForm.category)
      formData.append('stock', productForm.stock)
      
      // Append images
      if (productForm.images) {
        for (let i = 0; i < productForm.images.length; i++) {
          formData.append('images', productForm.images[i])
        }
      }

      const response = await fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      })

      const data = await response.json()
      
      if (data.success) {
        alert('Product added successfully!')
        setShowAddProduct(false)
        setProductForm({
          name: '',
          description: '',
          price: '',
          category: 'Roses',
          images: null,
          stock: 1
        })
        fetchSellerProducts()
      } else {
        alert(data.message || 'Error adding product')
      }
    } catch (error) {
      console.error('Error adding product:', error)
      alert('Error adding product')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteProduct = async (productId) => {
    if (!confirm('Are you sure you want to delete this product?')) return

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:8080/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json()
      
      if (data.success) {
        alert('Product deleted successfully!')
        fetchSellerProducts()
      } else {
        alert(data.message || 'Error deleting product')
      }
    } catch (error) {
      console.error('Error deleting product:', error)
      alert('Error deleting product')
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-gradient-to-b from-[#632111] via-[#a49c83] to-[#632111] min-h-screen">
      <DashboardNavbar />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#F2EBD9] mb-2">
                  Welcome, {user.first_name}! 🌸
                </h1>
                <p className="text-[#F2EBD9]/80 text-lg">
                  Manage your flower products and grow your business
                </p>
              </div>
              <button
                onClick={() => setShowAddProduct(true)}
                className="bg-[#DF804D] hover:bg-[#632111] text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Add New Product
              </button>
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-sm">🌺</span>
                <span className="text-lg font-medium text-[#DF804D] tracking-wide">YOUR PRODUCTS</span>
                <span className="text-sm">✨</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent">
                Product Gallery
              </h2>
              <p className="text-[#F2EBD9]/70 text-lg max-w-2xl mx-auto">
                {products.length} products in your store
              </p>
            </div>

            {loading ? (
              <div className="text-center text-white">Loading products...</div>
            ) : products.length === 0 ? (
              <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
                <h3 className="text-2xl font-serif text-[#F2EBD9] mb-4">No Products Yet</h3>
                <p className="text-[#F2EBD9]/70 mb-6">Start by adding your first product to showcase your beautiful flowers</p>
                <button
                  onClick={() => setShowAddProduct(true)}
                  className="bg-[#DF804D] hover:bg-[#632111] text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Add Your First Product
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div key={product._id} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden group hover:scale-105 transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={`http://localhost:8080${product.images[0]}`}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-serif font-bold text-[#F2EBD9] mb-2">{product.name}</h3>
                      <p className="text-[#F2EBD9]/70 text-sm mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[#DF804D] font-bold text-lg">${product.price.toFixed(2)}</span>
                        <span className="text-[#F2EBD9]/60 text-sm bg-white/10 px-2 py-1 rounded">{product.category}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#F2EBD9]/60 text-sm">Stock: {product.stock}</span>
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif font-bold text-[#632111]">Add New Product</h2>
              <button
                onClick={() => setShowAddProduct(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-[#632111] font-medium mb-2">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={productForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF804D] focus:border-transparent"
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label className="block text-[#632111] font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={productForm.description}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF804D] focus:border-transparent"
                  placeholder="Describe your product"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#632111] font-medium mb-2">Price ($)</label>
                  <input
                    type="number"
                    name="price"
                    value={productForm.price}
                    onChange={handleInputChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF804D] focus:border-transparent"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-[#632111] font-medium mb-2">Stock Quantity</label>
                  <input
                    type="number"
                    name="stock"
                    value={productForm.stock}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF804D] focus:border-transparent"
                    placeholder="1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#632111] font-medium mb-2">Category</label>
                <select
                  name="category"
                  value={productForm.category}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF804D] focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#632111] font-medium mb-2">Product Images (Max 5)</label>
                <input
                  type="file"
                  name="images"
                  onChange={handleInputChange}
                  required
                  multiple
                  accept="image/*"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DF804D] focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Select up to 5 images (JPG, PNG, etc.)</p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddProduct(false)}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#DF804D] hover:bg-[#632111] text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                  {loading ? 'Adding...' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default SellerDashboard
