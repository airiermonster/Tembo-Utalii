import { AnimatedText } from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Share Your{' '}
          <span className="inline-flex">
            {'ZANZIBAR'.split('').map((letter, index) => (
              <span
                key={index}
                className="animated-letter"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </span>
          {' '}Story
        </h1>
        <p className="text-xl text-gray-600">
          Help us enhance the tourism experience in Zanzibar by sharing your valuable feedback. 
          Your voice shapes the future of our paradise island.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Start Survey →
        </button>
      </div>
    </div>
  );
}