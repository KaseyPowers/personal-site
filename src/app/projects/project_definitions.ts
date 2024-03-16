export interface ProjectDef {
  id: string;
  title: string;
  subTitle?: string;
  description: string;
}

export const allProjectCategories: {
  id: string;
  title: string;
  subTitle?: string;
  projects: ProjectDef[];
}[] = [
  {
    id: "projects_main",
    title: "Projects",
    projects: [
      {
        id: "test",
        title: "Test 1",
        description: "project 1",
      },
      {
        id: "test2",
        title: "Test 2",
        description: "project 2",
      },
    ],
  },
];

//   {
//     id: "planned",
//     title: "Planned Projects",
//     subTitle: 'Ranging between brainstorming and "would be fun"',
//     projects: [
//       {
//         id: "toto",
//         title: "Todo List App",
//         subTitle: "TODO: Make this app",
//         description:
//           "A ToDo list app just to demonstrate basic state management",
//       },
//       {
//         id: "TTRPG",
//         title: "KaPow System",
//         subTitle: "Custom TTRPG System",
//         description: `Creating a custom System based loosely on DnD 3.5e, Pathfinder (1 & 2), and GURPS.
//           To help visualize the rules and how they interact with each other, I want to create an interactive app/tool.`,
//       },
//       {
//         id: "book_triggers",
//         title: "A Better Book tag & trigger tracker",
//         description:
//           "Based on conversations with friends who read quite a bit, sometimes the way book listings list triggers (if they do) is not always consistent or they can miss nuances that could be helpful. So the idea would be to create a UI with a database that would track triggers and tags along with room for sub-tags where relevant.",
//       },
//       {
//         id: "cyberdeck",
//         title: "Cyberdeck",
//         description:
//           "Mostly a daydream, but goals are focused around making a small keyboard + screen combination with added features like small oled displays showing custom information.",
//       },
//       {
//         id: "cars",
//         title: "Car Modifications/Upgrades",
//         description:
//           "Plenty of small ideas here, but namely playing around with concepts like a DIY dashcam or Media Control Screen.",
//       },
//     ],
//   },
// ];
