export default function Intro() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden flex-col space-y-6 text-center">
      <h1 className="text-6xl md:text-8xl lg:text-8xl font-black leading-none">
        Hello there, I'm{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Senthilnathan Mani.
        </span>
      </h1>
      <div className="text-4xl">
        <span className="text-blue-400">Software Engineer</span>{" "}
        <span> crafting digital experiences from </span>{" "}
        <span className="text-green-400">India</span>
      </div>
      <div className="text-2xl">
        I design and build exceptional digital experiences with a focus on
        performance, accessibility, and user delight. Currently building at{" "}
        <span className="text-purple-400">DHL</span>
      </div>
    </div>
  );
}
