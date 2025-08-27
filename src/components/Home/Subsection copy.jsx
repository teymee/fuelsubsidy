import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StackingCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const cards = [
    {
      id: 1,
      title: "Card One",
      content: "This is the first card in our stacking animation. It will stick and scale down as new cards appear.",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Card Two", 
      content: "The second card slides up and stacks on top of the first card. Notice how the first card scales down.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Card Three",
      content: "This third card continues the stacking effect, with previous cards getting smaller and staying behind.",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Card Four",
      content: "The final card completes our stack. All previous cards are now scaled down and stacked behind.",
      color: "from-red-500 to-red-600"
    },
    {
      id: 5,
      title: "Card Five",
      content: "One more card to show the full stacking effect in action with multiple layers.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    cards.forEach((card, index) => {
      if (!card) return;

      const isLastCard = index === cards.length - 1;

      // Set initial z-index (reverse order so cards come from behind)
      gsap.set(card, {
        zIndex: index + 1 // First card has lowest z-index, last card highest
      });

      // Create the stacking animation for each card
      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top top",
          end: isLastCard ? "top top" : "bottom top", // Last card doesn't pin
          scrub: 1,
          pin: !isLastCard, // Don't pin the last card
          pinSpacing: false,
          markers:true,
          onUpdate: (self) => {
            if (!isLastCard) {
              // Scale down and move up slightly as card gets stacked behind others
              const scale = 1 - (self.progress * 0.05);
              const y = self.progress * -10;
              
              gsap.set(card, {
                scale: Math.max(scale, 0.95),
                y: y
              });
            }
          }
        }
      });

      // Additional ScrollTrigger to handle cards getting unstuck by later cards
      if (!isLastCard) {
        cards.slice(index + 1).forEach((laterCard, laterIndex) => {
          gsap.timeline({
            scrollTrigger: {
              trigger: laterCard,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              onUpdate: (self) => {
                // Further scale down and move up as more cards stack on top
                const additionalScale = self.progress * 0.03 * (laterIndex + 1);
                const additionalY = self.progress * -5 * (laterIndex + 1);
                const currentScale = Math.max(1 - (0.05 + additionalScale), 0.85);
                const currentY = -10 + additionalY;
                
                gsap.set(card, {
                  scale: currentScale,
                  y: currentY
                });
              }
            }
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Stacking Cards</h1>
          <p className="text-xl">Scroll down to see the magic happen</p>
        </div>
      </div>

      {/* Cards Container */}
      <div ref={containerRef} className="relative">
        {cards.map((cardData, index) => (
          <div
            key={cardData.id}
            ref={el => cardsRef.current[index] = el}
            className="h-screen flex items-center justify-center p-8"
          >
            <div className={`w-full max-w-2xl h-96 bg-gradient-to-br ${cardData.color} rounded-3xl shadow-2xl flex items-center justify-center text-white transform-gpu`}>
              <div className="text-center p-8">
                <h2 className="text-4xl font-bold mb-6">{cardData.title}</h2>
                <p className="text-lg leading-relaxed">{cardData.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">All Done!</h2>
          <p className="text-xl">The cards have completed their stacking animation</p>
        </div>
      </div>
    </div>
  );
};

export default StackingCards;