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
      <h1 className="font-medium text-[15px]">{children}</h1>
    ),
    p: ({ children }) => (
      <p className="mb-5">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-black/10 pl-4 my-5">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside my-5">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="mb-1">{children}</li>
    ),
    ...components,
  }
}
