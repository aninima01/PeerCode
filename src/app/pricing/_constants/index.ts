import { Boxes, Globe, RefreshCcw, Shield } from "lucide-react";

export const ENTERPRISE_FEATURES = [
  {
    icon: Globe,
    label: "Worldwide Network",
    desc: "Optimized for speed with globally distributed execution nodes",
  },
  {
    icon: Shield,
    label: "Advanced Security",
    desc: "Enterprise-grade encryption and robust security protocols",
  },
  {
    icon: RefreshCcw,
    label: "Real-Time Data Sync",
    desc: "Seamless real-time synchronization across devices",
  },
  {
    icon: Boxes,
    label: "Infinite Storage",
    desc: "Store and access unlimited snippets and projects effortlessly",
  },
];

export const FEATURES = {
  development: [
    "Advanced AI",
    "Custom theme builder",
    "Integrated debugging tools",
    "Multi-language support",
  ],
  collaboration: [
    "Real-time pair programming",
    "Team workspaces",
    "Version control integration",
    "Code review tools",
  ],
  deployment: [
    "One-click deployment",
    "CI/CD integration",
    "Container support",
    "Custom domain mapping",
  ],
};
