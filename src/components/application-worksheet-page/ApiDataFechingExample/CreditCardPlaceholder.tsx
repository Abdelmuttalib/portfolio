import NextImage from "@/components/NextImage";

const CreditCardPlaceholder = () => {
  return (
    <div
      id="card"
      className="relative h-60 w-96 cursor-pointer overflow-hidden rounded-2xl font-mono text-white transition-all duration-500"
    >
      <div className="absolute top-0 left-0 z-20 flex h-full w-full flex-col justify-center gap-6 bg-gradient-to-tr from-gray-900 to-gray-700 p-6 transition-all delay-200 duration-100">
        <div className="relative flex items-center justify-between">
          <div className="relative">
            <NextImage
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
              alt="Smart card"
              className="h-12 w-12 blur"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="">
          <label htmlFor="" className="hidden">
            Card Number
          </label>
          <div className="w-full bg-transparent text-left text-2xl outline-none">
            <div className="h-6 text-2xl font-medium"></div>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col">
            <label htmlFor="" className="text-gray-400">
              Card Type
            </label>
            <div className="bg-transparent outline-none">
              <p className="text-sm font-medium"></p>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-gray-400">
              Expires
            </label>
            <div className="bg-transparent outline-none">
              <p className="text-sm font-medium"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPlaceholder;
