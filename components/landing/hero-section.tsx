import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black" />
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 -ml-[40rem] h-[50rem] w-[80rem] bg-gradient-to-tr from-red-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered CV Screening</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Smart CV Shortlisting for
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {' '}
              Modern HR
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-lg leading-8 text-gray-300 sm:text-xl">
            Transform your hiring process with our AI-powered assistant. Upload
            CVs, preview them instantly, and shortlist the best candidates in
            seconds—not hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/upload">
              <Button
                size="lg"
                className="group bg-red-600 text-white hover:bg-red-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 bg-transparent text-white hover:bg-gray-900"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-500">10x</div>
              <div className="mt-1 text-sm text-gray-400">Faster Screening</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500">95%</div>
              <div className="mt-1 text-sm text-gray-400">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500">1000+</div>
              <div className="mt-1 text-sm text-gray-400">CVs Processed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
