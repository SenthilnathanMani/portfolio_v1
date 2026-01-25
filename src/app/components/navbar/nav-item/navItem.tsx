export default function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="hover:-translate-y-[2px] pb-1 cursor-pointer bg-gradient-to-r from-blue-400 to-purple-400 bg-[length:0_0.2em] bg-[position:0_100%] bg-no-repeat transition-all duration-400 hover:bg-[length:100%_0.2em] text-gray-300 hover:text-white"
    >
      {children}
    </div>
  );
}
