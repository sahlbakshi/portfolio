import type { MDXComponents } from 'mdx/types'
import ParaLink from "@/components/paralink";
import Footer from './components/footer';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ParaLink,
    Footer,
    h1: ({ children }) => (
      <h1 className="font-semibold text-[20px] mb-5 sm:-mt-1">{children}</h1>
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
