'use client';

import { useQuery } from '@tanstack/react-query';
import { publicApi } from '@/lib/api';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturedProperties } from '@/components/home/featured-properties';
import { StatsSection } from '@/components/home/stats-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CtaSection } from '@/components/home/cta-section';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const { data: homeData, isLoading } = useQuery({
    queryKey: ['home'],
    queryFn: publicApi.getHome,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 text-[#425b30] animate-spin" />
      </div>
    );
  }

  return (
    <div className="pt-20">
      <HeroSection data={homeData} />
      <FeaturedProperties properties={homeData?.featuredProperties || []} />
      {homeData?.stats && homeData.stats.length > 0 && (
        <StatsSection stats={homeData.stats} />
      )}
      {homeData?.testimonials && homeData.testimonials.length > 0 && (
        <TestimonialsSection testimonials={homeData.testimonials} />
      )}
      <CtaSection />
    </div>
  );
}

