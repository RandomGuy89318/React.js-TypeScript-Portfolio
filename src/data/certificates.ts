export type Certificate = {
  title: string;
  description: string;
  filename: string;
};

export const certificates: Certificate[] = [
  {
    title: "IT Specialist: Databases",
    description: "Certified by Certiport. Covered relational database design, normalization, SQL queries, and data modeling concepts.",
    filename: "Certiport IT Specialist Databases",
  },
  {
    title: "IT Specialist: HTML and CSS",
    description: "Certified by Certiport. Focused on semantic HTML, responsive layouts, Flexbox, Grid, and modern CSS techniques.",
    filename: "Certiport IT Specialist HTML and CSS",
  },
  {
    title: "Designing Presentation Slides",
    description: "Certified by DICT. Training on creating effective and visually appealing presentation slides.",
    filename: "DICT Designing Presentation Slides",
  },
  {
    title: "Navigating Google Workspace",
    description: "Certified by DICT. Comprehensive training on utilizing Google Workspace tools for productivity and collaboration.",
    filename: "DICT Navigating Google Workspace",
  },
  {
    title: "Responsive Web Design",
    description: "Certified by FreeCodeCamp. Learned developer-friendly HTML & CSS, building responsive web pages and mastering CSS Grid and Flexbox.",
    filename: "FreeCodeCamp Responsive Web Design",
  },
];
