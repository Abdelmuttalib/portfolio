import { SkeletonLoader } from "@/components/loaders";

const CreditCard = () => {
  return (
    <div
      id="card"
      className="relative h-60 w-96 cursor-pointer overflow-hidden rounded-2xl font-mono text-white transition-all duration-500"
    >
      <div className="absolute top-0 left-0 z-20 flex h-full w-full flex-col justify-center gap-6 bg-gradient-to-tr from-gray-900 to-gray-700 p-6 transition-all delay-200 duration-100">
        <div className="relative flex items-center justify-between">
          <div className="relative">
            <SkeletonLoader className="h-12 w-12 blur" />
          </div>
        </div>

        <div className="">
          <label htmlFor="" className="hidden">
            Card Number
          </label>
          <div className="w-full bg-transparent text-left text-2xl outline-none">
            <SkeletonLoader className="h-8 w-56" />
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col">
            <label htmlFor="">Card Type</label>
            <div className="bg-transparent outline-none">
              <SkeletonLoader className="h-5 w-16" />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Expires</label>
            <div className="bg-transparent outline-none">
              <SkeletonLoader className="h-5 w-12" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-center gap-3 bg-gradient-to-tr from-gray-900 to-gray-700 transition-all">
        <div className="h-12 w-full bg-black"></div>

        <div className="flex flex-col justify-center gap-6 px-6">
          <div className="flex flex-col items-end">
            <label htmlFor="">CVV</label>
            <input
              type="text"
              id=""
              value="123"
              className="h-8 w-full rounded text-right text-black outline-none"
            />
          </div>

          <div className="relative flex items-center justify-start">
            <SkeletonLoader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
