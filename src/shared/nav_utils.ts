export interface NavItemDef {
  name: string;
  href: string;
  exact?: boolean;
}

export function isItemActive(item: NavItemDef, pathname: string): boolean {
  if (item.exact) {
    // for exact, just do an equality check
    return item.href === pathname;
  }
  // for non-exact, use startswith. NOTE: need to verify this behavior
  return pathname.startsWith(item.href);
}
