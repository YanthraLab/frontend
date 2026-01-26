"use client";

import React, { useState } from 'react';
import { DashboardHeader } from "@/components/organisms/Dashboard/Header";
import { AssignmentsList, AssignmentDetail } from "@/components/organisms/Assignments";
import { AssignmentListCardProps } from '@/components/molecules/AssignmentListCard/AssignmentListCard';
import { AssignmentDetailProps } from '@/components/organisms/Assignments/AssignmentDetail';

export default function AssignmentsPage() {
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);

  // Sample assignments data
  const assignmentsData: AssignmentListCardProps[] = [
    {
      id: '1',
      title: 'Assignment: Traffic Light System',
      description: 'Build a functional traffic light system using Arduino with proper timing sequences and pedestrian crossing features.',
      status: 'in-progress',
      difficulty: 'Medium',
      deadline: 'Jan 30, 2026',
      points: 100,
      progress: 65,
    },
    {
      id: '2',
      title: 'Temperature Monitoring System',
      description: 'Create a temperature and humidity monitoring system using DHT22 sensor with LCD display output.',
      status: 'pending',
      difficulty: 'Easy',
      deadline: 'Feb 5, 2026',
      points: 75,
    },
    {
      id: '3',
      title: 'Smart Home Automation',
      description: 'Design and implement a multi-room smart home automation system with voice control and mobile app integration.',
      status: 'pending',
      difficulty: 'Hard',
      deadline: 'Feb 15, 2026',
      points: 150,
    },
    {
      id: '4',
      title: 'Line Following Robot',
      description: 'Build an autonomous line following robot using IR sensors and motor control algorithms.',
      status: 'completed',
      difficulty: 'Medium',
      deadline: 'Jan 20, 2026',
      points: 100,
      progress: 100,
    },
    {
      id: '5',
      title: 'IoT Weather Station',
      description: 'Create a comprehensive weather station that measures temperature, humidity, pressure, and uploads data to cloud.',
      status: 'overdue',
      difficulty: 'Hard',
      deadline: 'Jan 25, 2026',
      points: 150,
      progress: 45,
    },
  ];

  // Detailed assignment data
  const assignmentDetails: Record<string, AssignmentDetailProps> = {
    '1': {
      id: '1',
      title: 'Assignment: Traffic Light System',
      description: 'Build a functional traffic light system using Arduino with proper timing sequences and pedestrian crossing features.',
      status: 'in-progress',
      difficulty: 'Medium',
      deadline: 'Jan 30, 2026',
      points: 100,
      estimatedTime: '4-6 hours',
      objectives: [
        { id: '1', text: 'Learn to LED control and timing sequences', completed: true },
        { id: '2', text: 'Understand state machine programming', completed: true },
        { id: '3', text: 'Implement button interrupt handling', completed: false },
        { id: '4', text: 'Master Arduino digital I/O operations', completed: false },
        { id: '5', text: 'Practice circuit design and debugging', completed: false },
      ],
      displayTitle: 'Display Title: 4-Way Traffic Light',
      displayDescription: 'A complete traffic light system that controls a 4-way intersection with proper timing sequences, pedestrian crossing buttons, and emergency vehicle override functionality.',
      codeSnippets: [
        {
          title: 'Main Setup Code',
          code: `// Traffic Light Pin Definitions
const int RED_PIN = 13;
const int YELLOW_PIN = 12;
const int GREEN_PIN = 11;
const int BUTTON_PIN = 2;

void setup() {
  pinMode(RED_PIN, OUTPUT);
  pinMode(YELLOW_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  
  // Attach interrupt for pedestrian button
  attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), 
                   pedestrianRequest, FALLING);
}

void loop() {
  // Red light - 5 seconds
  digitalWrite(RED_PIN, HIGH);
  delay(5000);
  digitalWrite(RED_PIN, LOW);
  
  // Green light - 8 seconds
  digitalWrite(GREEN_PIN, HIGH);
  delay(8000);
  digitalWrite(GREEN_PIN, LOW);
  
  // Yellow light - 2 seconds
  digitalWrite(YELLOW_PIN, HIGH);
  delay(2000);
  digitalWrite(YELLOW_PIN, LOW);
}`,
          language: 'cpp',
        },
        {
          title: 'Pedestrian Crossing Function',
          code: `volatile bool pedestrianWaiting = false;

void pedestrianRequest() {
  pedestrianWaiting = true;
}

void handlePedestrianCrossing() {
  if (pedestrianWaiting) {
    // Stop traffic
    digitalWrite(RED_PIN, HIGH);
    delay(3000);
    
    // Allow pedestrian crossing
    digitalWrite(PEDESTRIAN_GREEN, HIGH);
    delay(10000);
    digitalWrite(PEDESTRIAN_GREEN, LOW);
    
    pedestrianWaiting = false;
  }
}`,
          language: 'cpp',
        },
      ],
      challenges: [
        'How would you modify the code to handle emergency vehicle priority?',
        'What changes are needed to implement a yellow blink mode for nighttime operation?',
        'How can you add a countdown timer display for each light phase?',
        'Explain how you would synchronize multiple intersections in a network.',
      ],
      relatedResources: [
        {
          id: '1',
          title: 'Arduino Digital I/O Basics',
          type: 'tutorial',
          duration: '15 min',
          url: 'https://www.arduino.cc/en/Tutorial/DigitalPins',
        },
        {
          id: '2',
          title: 'Understanding Interrupts',
          type: 'video',
          duration: '22 min',
          url: 'https://www.youtube.com/watch?v=J61_PKyWjxU',
        },
        {
          id: '3',
          title: 'State Machine Programming Guide',
          type: 'documentation',
          duration: '30 min',
          url: 'https://docs.arduino.cc/learn/programming/state-machines',
        },
        {
          id: '4',
          title: 'Traffic Light Control Systems',
          type: 'article',
          duration: '10 min',
          url: 'https://www.electronics-tutorials.ws/io/traffic-light-controller.html',
        },
      ],
    },
    '2': {
      id: '2',
      title: 'Temperature Monitoring System',
      description: 'Create a temperature and humidity monitoring system using DHT22 sensor with LCD display output.',
      status: 'pending',
      difficulty: 'Easy',
      deadline: 'Feb 5, 2026',
      points: 75,
      estimatedTime: '2-3 hours',
      objectives: [
        { id: '1', text: 'Learn DHT22 sensor interfacing', completed: false },
        { id: '2', text: 'Understand I2C LCD communication', completed: false },
        { id: '3', text: 'Practice data formatting and display', completed: false },
        { id: '4', text: 'Implement temperature thresholds and alerts', completed: false },
      ],
      displayTitle: 'Environmental Monitoring Display',
      displayDescription: 'A real-time temperature and humidity monitoring system that reads sensor data and displays it on an LCD screen with visual alerts for out-of-range conditions.',
      codeSnippets: [
        {
          title: 'Sensor Reading Code',
          code: `#include <DHT.h>
#include <LiquidCrystal_I2C.h>

#define DHTPIN 2
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  dht.begin();
}

void loop() {
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(temp);
  lcd.print("C");
  
  lcd.setCursor(0, 1);
  lcd.print("Humidity: ");
  lcd.print(humidity);
  lcd.print("%");
  
  delay(2000);
}`,
          language: 'cpp',
        },
      ],
      challenges: [
        'How would you add temperature trending over time?',
        'What modifications are needed to log data to an SD card?',
        'How can you implement wireless data transmission?',
      ],
      relatedResources: [
        {
          id: '1',
          title: 'DHT22 Sensor Tutorial',
          type: 'tutorial',
          duration: '12 min',
        },
        {
          id: '2',
          title: 'I2C LCD Display Guide',
          type: 'video',
          duration: '18 min',
        },
        {
          id: '3',
          title: 'Sensor Calibration Techniques',
          type: 'documentation',
          duration: '25 min',
        },
      ],
    },
  };

  const handleAssignmentClick = (assignment: AssignmentListCardProps) => {
    setSelectedAssignment(assignment.id);
  };

  const handleBack = () => {
    setSelectedAssignment(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <DashboardHeader />
      <main className="container mx-auto p-4 md:p-8">
        {selectedAssignment && assignmentDetails[selectedAssignment] ? (
          <AssignmentDetail
            {...assignmentDetails[selectedAssignment]}
            onBack={handleBack}
          />
        ) : (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Assignments
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Complete assignments to earn points and master IoT concepts
              </p>
            </div>
            <AssignmentsList
              assignments={assignmentsData}
              onAssignmentClick={handleAssignmentClick}
            />
          </div>
        )}
      </main>
    </div>
  );
}
