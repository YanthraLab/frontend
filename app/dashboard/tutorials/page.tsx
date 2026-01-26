import { TutorialsBrowser } from "@/components/organisms/Tutorials";
import { CircleDot, FileText, Video, CheckSquare, Thermometer, Activity } from "lucide-react";

const tutorialsData = [
  {
    id: '1',
    title: 'Introduction to IoT and Arduino',
    description: 'Understanding IoT ecosystem, platforms, and basic electronics',
    level: 'beginner' as const,
    duration: '25 min',
    modules: 10,
    rating: 4.8,
    views: 31600,
    tags: [
      { label: 'Video', variant: 'video' as const },
      { label: 'Arduino', variant: 'arduino' as const },
    ],
    icon: <CircleDot className="w-6 h-6" />,
  },
  {
    id: '2',
    title: 'Setting Up Arduino IDE',
    description: 'Install and configure Arduino IDE, understand the development environment',
    level: 'beginner' as const,
    duration: '20 min',
    modules: 10,
    rating: 4.8,
    views: 18900,
    tags: [
      { label: 'Video', variant: 'video' as const },
      { label: 'Arduino', variant: 'arduino' as const },
    ],
    icon: <Video className="w-6 h-6" />,
  },
  {
    id: '3',
    title: 'Your First Arduino Program',
    description: 'Write and upload your first classic blink program',
    level: 'beginner' as const,
    duration: '30 min',
    modules: 10,
    rating: 4.7,
    views: 31600,
    tags: [
      { label: 'Quiz', variant: 'quiz' as const },
      { label: 'Arduino', variant: 'arduino' as const },
    ],
    icon: <FileText className="w-6 h-6" />,
  },
  {
    id: '4',
    title: 'Quiz: Arduino Basics',
    description: 'Test your understanding of Arduino fundamentals',
    level: 'beginner' as const,
    duration: '15 min',
    modules: 10,
    rating: 4.8,
    views: 12360,
    tags: [
      { label: 'Quiz', variant: 'quiz' as const },
      { label: 'Arduino', variant: 'arduino' as const },
    ],
    icon: <CheckSquare className="w-6 h-6" />,
  },
  {
    id: '5',
    title: 'ESP32 WiFi Connectivity',
    description: 'Connect ESP32 to WiFi and send data to cloud',
    level: 'intermediate' as const,
    duration: '35 min',
    modules: 10,
    rating: 4.7,
    views: 7240,
    tags: [
      { label: 'Video', variant: 'video' as const },
      { label: 'ESP32', variant: 'esp32' as const },
    ],
    icon: <Activity className="w-6 h-6" />,
  },
  {
    id: '6',
    title: 'Assignment: Traffic Light System',
    description: 'Build a working traffic light control with Arduino',
    level: 'beginner' as const,
    duration: '45 min',
    modules: 10,
    rating: 4.2,
    views: 8020,
    tags: [
      { label: 'Assignment', variant: 'assignment' as const },
      { label: 'Arduino', variant: 'arduino' as const },
    ],
    icon: <FileText className="w-6 h-6" />,
  },
  {
    id: '7',
    title: 'Temperature and Humidity Sensors (DHT11/DHT22)',
    description: 'Reading environmental data with sensor interfaces',
    level: 'intermediate' as const,
    duration: '25 min',
    modules: 10,
    rating: 4.8,
    views: 8520,
    tags: [
      { label: 'Video', variant: 'video' as const },
      { label: 'Sensors', variant: 'sensors' as const },
    ],
    icon: <Thermometer className="w-6 h-6" />,
  },
  {
    id: '8',
    title: 'Ultrasonic Distance Measurement',
    description: 'Using ultrasonic sensor to detect distance detection',
    level: 'intermediate' as const,
    duration: '30 min',
    modules: 10,
    rating: 4.7,
    views: 7800,
    tags: [
      { label: 'Video', variant: 'video' as const },
      { label: 'Sensors', variant: 'sensors' as const },
    ],
    icon: <Activity className="w-6 h-6" />,
  },
];

export default function TutorialsPage() {
  return <TutorialsBrowser tutorials={tutorialsData} />;
}
