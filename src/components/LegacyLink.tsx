import NextLink from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { to: string; hash?: string; children: ReactNode };
export default function LegacyLink({ to, hash, children, ...props }: Props) {
  const href = hash ? `${to}#${hash}` : to;
  return <NextLink href={href} {...props}>{children}</NextLink>;
}
