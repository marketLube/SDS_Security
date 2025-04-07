const posts = [
  {
    title: "The Future of CCTV: How AI is...",
    excerpt: "Choosing the right CCTV system can be overwhelming with so man...",
    image: "/images/blog2.png",
  },
  {
    title: "5 Key Features to Look for in a...",
    excerpt: "Artificial Intelligence (AI) is revolutionizing CCTV security, ma...",
    image: "/images/blog3.png",
  },
  {
    title: "The Future of CCTV: How AI is...",
    excerpt: "Choosing the right CCTV system can be overwhelming with so man...",
    image: "/images/blog2.png",
  },
  {
    title: "5 Key Features to Look for in a...",
    excerpt: "Artificial Intelligence (AI) is revolutionizing CCTV security, ma...",
    image: "/images/blog3.png",
  },
];
export const RelatedPosts = ({ className }) => {

  return (
    <div className={`flex flex-col pl-4 border-l-2 border-gray-200 ${className}`}>
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex items-start gap-4 py-4 border-b border-gray-200 last:border-b-0"
        >
          <div className="w-28 h-20 flex-shrink-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full  object-cover rounded"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-medium text-gray-900 truncate">
              {post.title}
            </h4>
            <p className="text-sm text-gray-500  mt-1">
              {post.excerpt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};