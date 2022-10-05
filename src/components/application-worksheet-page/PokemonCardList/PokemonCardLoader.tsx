import React from "react";

import { SkeletonLoader } from "@/components/loaders";

const PokemonCardLoader = () => (
  <div className="group flex h-44 w-96 transform items-center rounded bg-white px-3 transition-all duration-100 ease-linear hover:scale-105">
    <div className="flex w-2/5 flex-col items-center justify-center gap-3">
      <SkeletonLoader className="relative h-24 w-24 rounded-full" />

      <div className="text-2xl font-semibold leading-6 text-gray-900">
        <SkeletonLoader className="h-6 w-28" />
      </div>
    </div>
    <div className="w-3/5 space-y-3 pl-4">
      <div className="flex flex-col gap-1">
        <p className="text-md font-medium text-gray-400">Abilities</p>
        <div className="flex flex-wrap gap-1">
          {[1, 2].map((n) => (
            <SkeletonLoader key={n} className="h-7 w-20 rounded-full" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-medium text-gray-400">Base Experience</p>
        <SkeletonLoader className="h-6 w-16 rounded-full" />
      </div>
    </div>
  </div>
);

export default PokemonCardLoader;
