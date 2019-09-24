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
    url: '/dashboard'
  },
  {
    name: 'Questions Bank',
    url: '/dashboard',
    children: [
      {
        name: 'Subjects',
        url: '/subjects',
        icon: 'icon-puzzle'
      },
      {
        name: 'Parts',
        url: '/parts',
        icon: 'icon-puzzle'
      },
      {
        name: 'Question Types',
        url: '/question-types',
        icon: 'icon-puzzle'
      },
      {
        name: 'Questions',
        url: '/questions',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Testing Management',
    url: '/dashboard',
    children: [
      {
        name: 'User Types',
        url: '/user-types',
        icon: 'icon-puzzle'
      },
      {
        name: 'Users',
        url: '/users',
        icon: 'icon-puzzle'
      },
      {
        name: 'Classes',
        url: '/classes',
        icon: 'icon-user'
      },
      {
        name: 'Tests',
        url: '/tests',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Examinations',
    url:'/dashboard',
    children: [
      {
        name: 'Students',
        url: '/students',
        icon: 'icon-puzzle'
      },
      {
        name: 'Exams',
        url: '/exams',
        icon: 'icon-puzzle'
      },
      {
        name: 'Answer Sheets',
        url: '/answersheets',
        icon: 'icon-user'
      }
    ]
  }
];
