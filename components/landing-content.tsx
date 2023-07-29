"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const use cases = [
  {
    name: "Encyclopedia",
    avatar: "📚",
    title: "Research any question",
    description: "e.g., how many miles from the Earth to the Moon?",
  },
  {
    name: "Find Images",
    avatar: "🖼️",
    title: "Generate Images from Text",
    description: "e.g., show me two horses running through a field",
  },
  {
    name: "Generate videos",
    avatar: "🎥",
    title: "Generate a video",
    description: "e.g., create a video of birds flying over a blue lake",
  },
  {
    name: "Create music",
    avatar: "🎼",
    title: "Create music",
    description: "e.g., generate a short clip of a piano playing",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
