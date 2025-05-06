import React from "react";

const product = {
  title: "Умные беспроводные наушники X100",
  description:
    "Наушники X100 обеспечивают высокое качество звука, длительное время работы и удобную посадку. Поддержка Bluetooth 5.2 и шумоподавление.",
  price: 2999,
  purchases: 124,
  images: [
    "/images/x100-front.jpg",
    "/images/x100-side.jpg",
    "/images/x100-case.jpg",
  ],
  rating: 4.6,
  features: [
    "Bluetooth 5.2",
    "Активное шумоподавление",
    "До 30 часов работы",
    "Сенсорное управление",
  ],
};

const ProductPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8">
      {/* Галерея */}
      <div className="space-y-4">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product view ${index + 1}`}
            className="rounded-2xl shadow-md"
          />
        ))}
      </div>

      {/* Информация о товаре */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">{product.title}</h1>

        <div className="flex items-center gap-4 text-gray-600">
          <span>⭐ {product.rating} / 5</span>
          <span>🛒 {product.purchases} покупок</span>
        </div>

        <p className="text-lg text-gray-700">{product.description}</p>

        <ul className="list-disc list-inside text-gray-600">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <div className="text-3xl font-semibold text-green-600">
          {product.price}₽
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition duration-200">
          Купить
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
