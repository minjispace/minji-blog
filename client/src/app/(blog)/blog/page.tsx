"use client";
import { blogAPI } from "@/api/blog";
import { BlogType } from "@/app/types";
import Blog from "@/components/Blog";
import { toast } from "@/hook";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  // tanstack query
  const { isLoading, error, data } = useQuery({
    queryKey: ["getAllBlogs"],
    queryFn: () => blogAPI.getAllBlogs(),
  });

  // error 있을때 error toast
  if (error) {
    toast({
      title: "Failed to get Blog",
      //  @ts-ignore
      description: `${error?.response?.data?.message}`,
      variant: "destructive",
    });
  }

  return (
    <section className="mt-16 grid grid-cols-1-auto sm:grid-cols-1-auto md:grid-cols-2-auto lg:grid-cols-3-auto">
      {data?.map((blog: BlogType) => {
        return (
          <Blog
            key={blog.id}
            blog={blog}
            isLoading={isLoading}
            adminMode={false}
          />
        );
      })}
    </section>
  );
};

export default Page;
