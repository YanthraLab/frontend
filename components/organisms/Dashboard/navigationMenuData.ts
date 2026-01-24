import {
  BookOpen,
  Layers,
  Search,
  TrendingUp,
  Bookmark,
  FileQuestion,
  ClipboardList,
  BarChart3,
  Award,
  Package,
  ShoppingBag,
  Star,
  ShoppingCart,
  Lightbulb,
  Rocket,
  Users,
  FolderOpen,
  MessageSquare,
  Mail,
  Send,
  Archive,
} from "lucide-react";
import { MenuSection } from "./NavigationDropdownMenu";

export const learningMenuSections: MenuSection[] = [
  {
    title: "Learning Hub",
    items: [
      { icon: BookOpen, label: "Learning Home", href: "/dashboard" },
      { icon: Layers, label: "Learning Levels", href: "/dashboard/levels" },
      {
        icon: Search,
        label: "Browse All Tutorials",
        href: "/dashboard/tutorials",
      },
      { icon: TrendingUp, label: "Recommended", href: "/dashboard/recommended" },
      { icon: Bookmark, label: "My Bookmarks", href: "/dashboard/bookmarks" },
    ],
  },
  {
    title: "Practice & Assess",
    items: [
      { icon: FileQuestion, label: "Take Quiz", href: "/dashboard/quiz" },
      {
        icon: ClipboardList,
        label: "View Assignments",
        href: "/dashboard/assignments",
      },
    ],
  },
  {
    title: "Track Progress",
    items: [
      { icon: BarChart3, label: "Progress & Stats", href: "/dashboard/progress" },
      { icon: Award, label: "Certificates", href: "/dashboard/certificates" },
    ],
  },
];

export const marketplaceMenuSections: MenuSection[] = [
  {
    title: "Shop",
    items: [
      { icon: ShoppingBag, label: "Browse Products", href: "/marketplace" },
      { icon: Star, label: "Featured Items", href: "/marketplace/featured" },
      { icon: Package, label: "Categories", href: "/marketplace/categories" },
    ],
  },
  {
    title: "My Orders",
    items: [
      { icon: ShoppingCart, label: "Shopping Cart", href: "/marketplace/cart" },
      {
        icon: ClipboardList,
        label: "Order History",
        href: "/marketplace/orders",
      },
    ],
  },
];

export const innovationHubMenuSections: MenuSection[] = [
  {
    title: "Innovation Hub",
    items: [
      { icon: Lightbulb, label: "Explore Ideas", href: "/innovation" },
      { icon: Rocket, label: "My Projects", href: "/innovation/projects" },
      { icon: Users, label: "Collaborations", href: "/innovation/collaborate" },
      { icon: FolderOpen, label: "Showcase", href: "/innovation/showcase" },
    ],
  },
];

export const messagesMenuSections: MenuSection[] = [
  {
    title: "Messages",
    items: [
      { icon: Mail, label: "Inbox", href: "/messages" },
      { icon: Send, label: "Sent", href: "/messages/sent" },
      { icon: Archive, label: "Archived", href: "/messages/archived" },
    ],
  },
  {
    title: "Community",
    items: [
      { icon: MessageSquare, label: "Discussions", href: "/messages/discussions" },
      { icon: Users, label: "Groups", href: "/messages/groups" },
    ],
  },
];
