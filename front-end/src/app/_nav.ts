interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  // {
  //   name: 'Customer Types',
  //   url: '/customer-type',
  //   icon: 'icon-speedometer'
  // },
  // {
  //   name: 'Customers',
  //   url: '/customers',
  //   icon: 'icon-people'
  // },
  {
    name: 'Users management',
    url: '/users-management',
    icon: 'icon-user'
  }
];
