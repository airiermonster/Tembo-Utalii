"use client";

export const AnimatedText = () => {
  return (
    <span className="text-3xl font-bold">
      {'ZANZIBAR'.split('').map((letter, index) => (
        <span
          key={index}
          className="animated-letter inline-block"
          style={{ 
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};