export const RelatedPosts = () => {
  const posts = [
    {
      title: "The Future of CCTV: How AI is Transforming Security",
      excerpt:
        "Choosing the right CCTV system can be overwhelming with so many options available. This guide highlights five must-have features, including high-definition recording, night vision, remote access, motion detection, and cloud storage",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/615e1bbb310db470fa14fbfd8a5fcaeba91cea6a",
    },
    {
      title: "5 Key Features to Look for in a Modern CCTV System",
      excerpt:
        "Artificial Intelligence (AI) is revolutionizing CCTV security, making surveillance smarter and more efficient. From facial recognition to real-time threat detection,",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b83337ac9c7eb649d67eb8ac1c4232f6a243f202",
    },
    {
      title: "The Future of CCTV: How AI is Transforming Security",
      excerpt:
        "Choosing the right CCTV system can be overwhelming with so many options available. This guide highlights five must-have features, including high-definition recording, night vision, remote access, motion detection, and cloud storage",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/615e1bbb310db470fa14fbfd8a5fcaeba91cea6a",
    },
    {
      title: "5 Key Features to Look for in a Modern CCTV System",
      excerpt:
        "Artificial Intelligence (AI) is revolutionizing CCTV security, making surveillance smarter and more efficient. From facial recognition to real-time threat detection,",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b83337ac9c7eb649d67eb8ac1c4232f6a243f202",
    },
  ];

  return (
    <aside className="flex flex-col gap-2 items-start py-2 pr-0 pl-5 border border-black border-opacity-20 w-[399px] max-md:w-full max-md:border-l">
      {posts.map((post, index) => (
        <article
          key={index}
          className={`flex gap-4 items-start ${index < posts.length - 1 ? "px-0 pt-3 pb-5 w-full border border-black border-opacity-20" : "px-0 pt-3 pb-5 w-full"}`}
        >
          <img
            src={post.image}
            alt=""
            className="w-[100px] h-[80px] rounded-[8px]"
          />
          <div className="flex flex-col flex-1 gap-4 justify-center items-center px-0 py-1">
            <h3 className="w-full text-lg font-medium tracking-tight leading-5 text-black">
              {post.title}
            </h3>
            <p className="overflow-hidden w-full h-9 text-base text-black opacity-60 text-ellipsis">
              {post.excerpt}
            </p>
          </div>
        </article>
      ))}
    </aside>
  );
};
