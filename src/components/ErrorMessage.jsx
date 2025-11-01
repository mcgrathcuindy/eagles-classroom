// Error Message Component
export default function ErrorMessage({ error, retry }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
      <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 max-w-md">
        <h3 className="text-red-400 font-semibold text-lg mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-gray-300 text-sm mb-4">
          {error || 'Failed to load content. Please try again later.'}
        </p>
        {retry && (
          <button
            onClick={retry}
            className="bg-[#0088ff] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#48bae0] transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
