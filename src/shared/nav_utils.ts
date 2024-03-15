export interface NavItemDef {
  id: string;
  name: string;
  href: string;
  target?: string;
  exact?: boolean;
  icon?: JSX.Element;
  active?: boolean;
}

export function isItemActive(item: NavItemDef, pathname: string): boolean {
  if (item.exact) {
    // for exact, just do an equality check
    return item.href === pathname;
  }
  // for non-exact, use startswith. NOTE: need to verify this behavior
  return pathname.startsWith(item.href);
}
