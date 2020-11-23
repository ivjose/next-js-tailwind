export default function Input({ label, type = 'text', placeholder, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor="price" className="block font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative  border rounded-md">
        {(type === 'text' || type === 'email') && (
          <input
            {...props}
            type={type}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-2 sm:text-sm border-gray-700 rounded-md"
            placeholder={placeholder}
          />
        )}

        {type === 'textarea' && (
          <textarea
            {...props}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-2 sm:text-sm border-gray-700 rounded-md"
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
}
