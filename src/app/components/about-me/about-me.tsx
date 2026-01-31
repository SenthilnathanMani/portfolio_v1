"use client";
import Typewriter from "typewriter-effect";
export default function AboutMe() {
  const techStack = [
    "React",
    "Angular",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "Kotlin",
    "Azure",
    "GraphQL",
    "Android",
    "Mongo DB",
    "Next.js",
    "NX monorepo",
    "SQL",
  ];
  const typeItems = [
    {
      text: '<span class="text-blue-400">$ whoami</span>',
    },
    { text: "<br/>" },
    {
      text: "<span class='text-green-400'>Senthilnathan Mani</span>",
    },
    { text: "<br/>" },
    {
      text: '<span class="text-purple-400">senthilnathanlab@gmail.com</span>',
    },
    { text: "<br/>" },
    { text: "<br/>" },
    {
      text: '<span class="text-blue-400">$ cat personal_info.json</span>',
    },
    { text: "<br/>" },
    { text: '<span class="text-gray-300">{</span>' },
    { text: "<br/>" },
    {
      text: "<span class='text-purple-400'>'name': 'Senthilnathan Mani',</span>",
    },
    { text: "<br/>" },
    {
      text: "<span class='text-purple-400'>'role': 'Senior Software Engineer',</span>",
    },
    { text: "<br/>" },
    {
      text: "<span class='text-purple-400'>'location': 'Bangalore, India',</span>",
    },
    { text: "<br/>" },
    {
      text: "<span class='text-purple-400'>'experience': '8+ years',</span>",
    },
    { text: "<br/>" },
    {
      text: "<span class='text-purple-400'>'status': 'building_cool_stuff'</span>",
    },
    { text: "<br/>" },
    { text: '<span class="text-gray-300">}</span>' },
    { text: "<br/>" },
    { text: "<br/>" },
    {
      text: '<span class="text-blue-400">$ echo "Passion for clean code"</span>',
    },
    { text: "<br/>" },
    {
      text: '<span class="text-green-400">Passion for clean code</span>',
    },
    { text: "<br/>" },
    { text: "<br/>" },
    {
      text: '<span class="text-blue-400">$ ls current_projects/</span>',
    },
    { text: "<br/>" },
    {
      text: "<span class='text-yellow-400'>portfolio/</span>",
    },
  ];

  const handleTypewriterInit = (typewriter: any) => {
    typeItems.forEach((item) => {
      typewriter.typeString(item.text);
    });

    typewriter.start();
  };
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin w-4 h-4"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Bengalure, India
            </div>
            <h2 className="text-5xl md:text-6xl font-bold" id="about-heading">
              About Me<span className="text-blue-400">.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a passionate{" "}
                <span className="text-blue-400 font-semibold">
                  Senior Software Engineer
                </span>{" "}
                with over 8 years of experience building scalable web
                applications and innovative digital solutions.
              </p>
              <p>
                Currently crafting exceptional user experiences at{" "}
                <span className="text-purple-400 font-semibold">DHL</span>,
                where I am part of frontend architecture and mentoring junior
                developers in Bengalure's thriving tech scene.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="text-card-foreground relative bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between bg-gray-800/80 px-4 py-3 border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    ~/home/senthilnathan
                  </div>
                </div>
                <div className="p-6 font-mono text-sm min-h-[400px] flex flex-col">
                  <div className="flex-1">
                    <Typewriter
                      options={{ cursor: "", delay: 30 }}
                      onInit={(typewriter) => {
                        handleTypewriterInit(typewriter);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
