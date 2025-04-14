 import person from "../assets/images/about_us/person.jpg"
 import parts from "../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative w-full lg:w-1/2">
            <div className="w-3/4">
              <img 
                src={person}
                alt="Mechanic smiling"
                className="w-full h-[500px] rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute bottom-[-50px] right-0 w-2/3">
              <img 
                src={parts}
                alt="Car parts and tools"
                className="w-[300px] h-[400px] rounded-lg shadow-xl border-8 border-white"
              />
            </div>
          </div>
  
          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <span className="text-red-600 font-semibold text-lg">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                We are qualified<br />
                & of experience<br />
                in this field
              </h2>
            </div>
  
            <div className="space-y-4 text-gray-600">
              <p>
                There Are Many Variations Of Passages Of Lorem Ipsum Available, 
                But The Majority Have Suffered Alteration In Some Form, By Injected 
                Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
              </p>
              <p>
                The Majority Have Suffered Alteration In Some Form, By Injected 
                Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
              </p>
            </div>
  
            <button className="px-8 py-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors mt-6">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    );
};

export default About;