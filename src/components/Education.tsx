import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Licence Professionnelle en Réseaux et Télécommunication",
    period: "Septembre 2021 - Mai 2022",
  },
  {
    title: "BTS en Génie Logiciel",
    period: "Septembre 2020 - Mai 2021",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Ma <span className="text-primary">Formation</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

            {/* Timeline items */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="rounded-lg border border-border bg-card p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                      <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {edu.period}
                      </div>
                      <h3 className="text-xl font-semibold leading-relaxed">
                        {edu.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
