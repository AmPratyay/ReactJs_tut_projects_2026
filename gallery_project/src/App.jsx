import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const API_URL = "https://picsum.photos/v2/list";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch images from API
  const fetchImages = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `${API_URL}?page=${page}&limit=${limit}`
      );

      setImages(response.data);
    } catch (error) {
      console.error(error);
      setError("Failed to load images. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  // Fetch data whenever page or limit changes
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // Previous page
  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  // Next page
  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Change number of images per page
  const handleLimitChange = (event) => {
    setLimit(Number(event.target.value));
    setPage(1);
  };

  // Filter images by author
  const filteredImages = images.filter((image) =>
    image.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-10">

      {/* Header */}
      <header className="mx-auto mb-8 max-w-7xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Image Gallery
        </h1>

        <p className="mt-2 text-gray-500">
          Explore beautiful images from Picsum
        </p>
      </header>

      {/* Controls */}
      <div className="mx-auto mb-8 flex max-w-7xl flex-col gap-4 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">

        {/* Search */}
        <div className="w-full sm:max-w-sm">
          <input
            type="text"
            placeholder="Search by author..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5
                       outline-none transition
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="flex items-center gap-3">

          {/* Image count */}
          <label className="text-sm font-medium text-gray-600">
            Images:
          </label>

          <select
            value={limit}
            onChange={handleLimitChange}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2
                       outline-none focus:border-blue-500"
          >
            <option value={6}>6</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>

          {/* Refresh */}
          <button
            onClick={fetchImages}
            disabled={loading}
            className="rounded-lg bg-gray-800 px-4 py-2.5
                       font-semibold text-white shadow-sm
                       transition hover:bg-gray-900
                       disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mx-auto mb-6 max-w-7xl rounded-lg bg-red-50 p-4 text-center text-red-600">
          {error}

          <button
            onClick={fetchImages}
            className="ml-3 font-semibold underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-16">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
        </div>
      )}

      {/* Gallery */}
      {!loading && (
        <>
          {filteredImages.length > 0 ? (
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group overflow-hidden rounded-xl bg-white shadow-md
                             transition duration-300
                             hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Image */}
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="block w-full cursor-pointer overflow-hidden"
                  >
                    <img
                      src={image.download_url}
                      alt={`Photo by ${image.author}`}
                      loading="lazy"
                      className="h-56 w-full object-cover
                                 transition duration-500
                                 group-hover:scale-110"
                    />
                  </button>

                  {/* Card content */}
                  <div className="p-4">
                    <h2 className="truncate text-lg font-bold text-gray-800">
                      {image.author}
                    </h2>

                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        Image #{index + 1}
                      </p>

                      <p className="text-xs text-gray-400">
                        ID: {image.id}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-bold text-gray-700">
                No images found
              </h2>

              <p className="mt-2 text-gray-500">
                Try searching for a different author.
              </p>
            </div>
          )}
        </>
      )}

      {/* Pagination */}
      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-center gap-5">

        <button
          onClick={handlePrevious}
          disabled={page === 1 || loading}
          className="rounded-lg bg-blue-600 px-6 py-2.5
                     font-semibold text-white shadow-md
                     transition hover:bg-blue-700
                     active:scale-95
                     disabled:cursor-not-allowed
                     disabled:bg-gray-300"
        >
          ← Previous
        </button>

        <span className="min-w-12 text-center text-xl font-bold text-gray-800">
          {page}
        </span>

        <button
          onClick={handleNext}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-2.5
                     font-semibold text-white shadow-md
                     transition hover:bg-blue-700
                     active:scale-95
                     disabled:cursor-not-allowed
                     disabled:bg-gray-300"
        >
          Next →
        </button>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 h-10 w-10
                         rounded-full bg-black/70 text-xl text-white
                         transition hover:bg-black"
            >
              ✕
            </button>

            <img
              src={selectedImage.download_url}
              alt={selectedImage.author}
              className="max-h-[75vh] w-full object-contain"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">
                {selectedImage.author}
              </h2>

              <p className="text-sm text-gray-500">
                Image ID: {selectedImage.id}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;