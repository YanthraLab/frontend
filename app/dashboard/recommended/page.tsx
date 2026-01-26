import { RecommendationsView } from "@/components/organisms/Recommendations";
import { CircleDot, Lightbulb, Thermometer } from "lucide-react";

const personalizedRecommendations = [
  {
    id: '1',
    title: 'Ultrasonic Distance Measurement',
    description: 'Using HC-SR04 sensor for distance detection',
    level: 'intermediate' as const,
    category: 'Sensors',
    duration: '40 min',
    xp: 75,
    matchPercentage: 90,
    additionalInfo: 'Next in your current level',
    icon: <CircleDot className="w-6 h-6" />,
  },
  {
    id: '2',
    title: 'Light Sensors and LDR',
    description: 'Measuring light intensity and creating automatic lighting',
    level: 'intermediate' as const,
    category: 'Sensors',
    duration: '35 min',
    xp: 75,
    matchPercentage: 90,
    additionalInfo: 'Similar to completed tutorials',
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    id: '3',
    title: 'PIR Motion Detection',
    description: 'Implementing motion sensing for security applications',
    level: 'intermediate' as const,
    category: 'Sensors',
    duration: '40 min',
    xp: 75,
    matchPercentage: 89,
    additionalInfo: 'Complements your sensor knowledge',
    icon: <Thermometer className="w-6 h-6" />,
  },
];

const trendingTutorials = [
  {
    id: '1',
    title: 'ESP32 WiFi Connectivity',
    description: 'Connect ESP32 to WiFi and send data to cloud',
    level: 'intermediate' as const,
    duration: '50 min',
    studentsEnrolled: 100,
    rating: 4.8,
    isPopular: true,
  },
  {
    id: '2',
    title: 'MQTT Protocol Basics',
    description: 'Understanding MQTT for IoT communication',
    level: 'advanced' as const,
    duration: '55 min',
    studentsEnrolled: 120,
    rating: 4.9,
    isPopular: false,
  },
  {
    id: '3',
    title: 'AWS IoT Core Integration',
    description: 'Connect devices to AWS IoT Core and manage data',
    level: 'advanced' as const,
    duration: '60 min',
    studentsEnrolled: 150,
    rating: 4.7,
    isPopular: false,
  },
];

export default function RecommendedPage() {
  return (
    <RecommendationsView
      personalizedRecommendations={personalizedRecommendations}
      trendingTutorials={trendingTutorials}
    />
  );
}
