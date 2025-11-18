import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-black to-black" />
      <div className="absolute inset-0">
        <div className="absolute right-1/2 top-0 -mr-[40rem] h-[50rem] w-[80rem] bg-gradient-to-tl from-red-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your hiring process?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join hundreds of HR professionals who are already using our smart
            assistant to find the perfect candidates faster than ever.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/upload">
              <Button
                size="lg"
                className="group bg-red-600 text-white hover:bg-red-700"
              >
                Start Shortlisting Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">
              Trusted by innovative companies worldwide
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-8 text-gray-600">
              <div className="text-2xl font-bold">TechCorp</div>
              <div className="text-2xl font-bold">InnovateLabs</div>
              <div className="text-2xl font-bold">FutureWorks</div>
              <div className="text-2xl font-bold">NextGen HR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
