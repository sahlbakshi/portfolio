import type { MDXComponents } from 'mdx/types'
import ParaLink from "@/components/paralink";
import Footer from '@/components/footer';
import Date from '@/components/date';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ParaLink,
    Footer,
    Date,
    h1: ({ children }) => (
      <h1 className="font-semibold text-[19px] mt-1 sm:-mt-0.5">{children}</h1>
    ),
    p: ({ children }) => (
      <p className="mb-5">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),
    ...components,
  }
}
