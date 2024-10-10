"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] w-full rounded-md flex flex-col antialiased bg-background items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={reviews}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const reviews = [
  {
    quote:
      "The quality of the fabric is amazing, and the designs are unique. I get compliments every time I wear something from FashionNation!",
    name: "Sophia L.",
    title: "Verified Buyer",
  },
  {
    quote:
      "Super fast delivery and the product looks exactly like the pictures. I’m in love with my new jacket!",
    name: "James K.",
    title: "Verified Buyer",
  },
  {
    quote:
      "FashionNation's customer service is top-notch! They quickly resolved an issue with my order and even offered a discount on my next purchase.",
    name: "Ava M.",
    title: "Verified Buyer",
  },
  {
    quote:
      "These are the most comfortable jeans I've ever worn. Perfect fit, and the style is on point!",
    name: "Daniel T.",
    title: "Verified Buyer",
  },
  {
    quote:
      "I was skeptical at first, but the clothes exceeded my expectations. Great prices and high-quality materials!",
    name: "Emma R.",
    title: "Verified Buyer",
  },
];
