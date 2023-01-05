const Empty = ({ children }: { children: string }) => (
  <span className="w-full h-full flex justify-center items-center dark:(bg-dark-400)">
    {children}
  </span>
);

export default Empty;
