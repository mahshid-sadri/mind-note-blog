import React from 'react';
import { Hero } from '../Sections/Hero';
import { FeaturedArticles } from '../Sections/FeaturedArticles';
import { Categories } from '../Sections/Categories';
import { LatestPosts } from '../Sections/LatestPosts';
import { Newsletter } from '../Sections/Newsletter';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <Categories />
      <LatestPosts />
      <Newsletter />
    </>
  );
};