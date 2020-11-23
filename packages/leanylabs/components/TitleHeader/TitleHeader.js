import React from 'react';

export default function TitleHeader({ title }) {
  return (
    <div className="flex items-center mb-10">
      <span className="w-8 sm:w-16 h-2 inline-block mr-3  md:mr-10 bg-yellow-500"></span>
      <h2 className="text-3xl md:text-4xl inline-block font-bold">{title}</h2>
    </div>
  );
}
