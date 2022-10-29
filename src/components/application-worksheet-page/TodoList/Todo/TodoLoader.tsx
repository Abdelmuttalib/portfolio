import { SkeletonLoader } from "@/components/loaders";

const TodoLoader = () => (
  <div className="shadow-primary-100 relative flex h-36 w-full items-center rounded-md bg-white py-4 px-6 shadow-2xl">
    <div className="flex flex-col items-stretch gap-2">
      <h4>
        <SkeletonLoader className="h-6 w-44" />
      </h4>
      <SkeletonLoader className="h-6 w-24" />

      <SkeletonLoader className="h-6 w-28" />
    </div>
    <SkeletonLoader className="absolute right-4 top-4 h-7 w-7 rounded-full" />
  </div>
);

export default TodoLoader;
