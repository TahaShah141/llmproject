import { Card, CardContent } from '@/components/ui/card';
import { FileSearch, Zap, Eye, Target } from 'lucide-react';

const features = [
  {
    icon: FileSearch,
    title: 'Smart Analysis',
    description:
      'Our AI analyzes CVs instantly, identifying key skills, experience, and qualifications that match your requirements.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Process hundreds of CVs in minutes. What used to take days now takes seconds with our intelligent screening system.',
  },
  {
    icon: Eye,
    title: 'Beautiful Previews',
    description:
      'View CVs with elegant, easy-to-read previews. Navigate through documents effortlessly with our intuitive interface.',
  },
  {
    icon: Target,
    title: 'Precise Shortlisting',
    description:
      'Build your perfect candidate pool with confidence. Our system helps you identify top talent with precision.',
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to streamline hiring
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Powerful features designed to make CV screening effortless and
            efficient
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group border-gray-800 bg-gray-900/50 backdrop-blur transition-all hover:border-red-500/50 hover:bg-gray-900"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 text-red-500 ring-1 ring-red-500/20 transition-all group-hover:bg-red-500/20 group-hover:ring-red-500/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
