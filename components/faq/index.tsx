import React from 'react';
import Typography from '../Typography';

export interface Question {
  question: string;
  answer: React.ReactNode;
}

export const questions: Question[] = [
  {
    question: 'Design Automation',
    answer: (
      <div className="text-left text-sm md:text-base space-y-4">
        <Typography.H6>AI-Assisted Drawing Automation for CAD-to-Manufacturing</Typography.H6>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Objective:</strong>
          <ul className="list-disc list-outside pl-4 space-y-1 text-gray-700">
            <li>Use AI to learn from existing engineering drawings and improve drawing creation over time</li>
            <li>Create an AI agent based on learning, to assist all design engineers</li>
            <li>Use logic to place views, dimensions, and annotations intelligently</li>
            <li>Automatically enforce drawing standards using AI</li>
            <li>Reduce manual drafting effort and errors through automation</li>
          </ul>
        </div>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Expected Outcome:</strong>
          <ul className="list-disc list-outside pl-4 space-y-1 text-gray-700">
            <li>Manufacturing-ready drawings generated through an autonomous drafting system with minimal human intervention</li>
            <li>AI agent should automatically update itself for Creo version updates</li>
            <li>Consistent drawing standards achieved using learned rules and design patterns</li>
            <li>Reduction in manual drafting effort through intelligent automation</li>
            <li>Faster design-to-manufacturing cycle enabled by data-driven drafting workflows</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: 'Costing Automation',
    answer: (
      <div className="text-left text-sm md:text-base space-y-4">
        <Typography.H6>CAD-to-Quote AI Agent: Instant Manufacturing Cost from 3D Models</Typography.H6>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Objective:</strong>
          <ul className="list-disc list-outside pl-4 space-y-1 text-gray-700">
            <li>Extract manufacturing features from CAD models</li>
            <li>Develop cost calculation algorithms</li>
            <li>Estimate material, machining, and process costs</li>
            <li>Build a chat-style AI quoting agent that collects inputs (material, quantity, tolerance) and outputs a quote</li>
            <li>Provide transparent cost breakdown</li>
            <li>Add explainable AI showing top cost drivers and "what-if" design change impact</li>
          </ul>
        </div>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Expected Outcome:</strong>
          <ul className="list-disc list-outside pl-4 space-y-1 text-gray-700">
            <li>Quote generated in seconds with material + machining + setup + overhead split</li>
            <li>Clear feature-wise and process-wise cost contribution (transparent pricing)</li>
            <li>Live demo experience: AI agent conversation + auto quotation summary (report/PDF ready)</li>
            <li>Improved accuracy over time using historical/synthetic training data</li>
            <li>DFM suggestions that reduce cost and machining time (student-friendly insights)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: 'Design Automation - Pipe Routing',
    answer: (
      <div className="text-left text-sm md:text-base space-y-4">
        <Typography.H6>Intelligent Pipe Routing Automation</Typography.H6>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Objective:</strong>
          <ul className="list-disc list-outside pl-4 space-y-1 text-gray-700">
            <li>Convert the 3D CAD assembly into a routing map (free space, obstacles, clearance zones)</li>
            <li>Generate collision-free routes between end points using pathfinding</li>
            <li>Apply routing constraints: minimum bend radius, diameter clearance, rigid vs flexible rules, keep-out/clamp zones</li>
            <li>Optimize the route for shortest length and minimum bends using a multi-objective scoring method</li>
            <li>Check manufacturability by validating bend sequence feasibility and outputting a bend list / routing report</li>
          </ul>
        </div>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Expected Outcome:</strong>
          <ul className="list-disc list-outside pl-4 space-y-1 text-gray-700">
            <li>Automatic collision-free pipe routes for both rigid and flexible lines in complex assemblies</li>
            <li>Reduced routing time and fewer iterations through quick re-routing when constraints/geometry change</li>
            <li>Consistent and repeatable routing results</li>
            <li>Better manufacturability: fewer bends, correct bend radius compliance, and valid bend sequence output</li>
            <li>Clear outputs for review: total length, bend count, clearance status, and alternative route options</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: 'Autonomous Vehicle (Software)',
    answer: (
      <div className="text-left text-sm md:text-base space-y-4">
        <Typography.H6>Camera-Guided Autonomous Robot</Typography.H6>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Objective:</strong>
          <ul className="list-disc list-outside pl-4 space-y-1 text-gray-700">
            <li>Use a camera/encoder/IMU to measure chain position, lateral drift, and vibration continuously</li>
            <li>Build a deviation-detection algorithm (image processing + filtering) to estimate error</li>
            <li>Design a feedback control strategy (PID/MPC) to correct misalignment/backlash in real time</li>
            <li>Fuse multi-sensor data (vision + encoder) using a filter for stable tracking</li>
            <li>Implement safety + robustness logic (latency handling, fault detection, auto-recalibration)</li>
          </ul>
        </div>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Expected Outcome:</strong>
          <ul className="list-disc list-outside pl-4 space-y-1 text-gray-700">
            <li>Stable, straight-line chain motion with reduced wobble and drift</li>
            <li>Higher positioning accuracy and repeatability even at varying speeds/loads</li>
            <li>Automatic compensation for mechanical misalignment, wear, and slack/backlash</li>
            <li>Robust closed-loop motion control that remains stable under noise and lighting changes</li>
            <li>Clear demo outputs: live error plot, control response, and before/after alignment improvement</li>
          </ul>
        </div>
      </div>
    ),
  }
];

export const srcasQuestions: Question[] = [
  {
    question: 'SRCAS Problem Statement 1',
    answer: (
      <div className="text-left text-sm md:text-base space-y-4">
        <Typography.H6>Problem Statement 1</Typography.H6>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Description:</strong>
          <p className="text-gray-700">This problem statement will be updated soon. Stay tuned for more details.</p>
        </div>
      </div>
    ),
  },
  {
    question: 'SRCAS Problem Statement 2',
    answer: (
      <div className="text-left text-sm md:text-base space-y-4">
        <Typography.H6>Problem Statement 2</Typography.H6>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Description:</strong>
          <p className="text-gray-700">This problem statement will be updated soon. Stay tuned for more details.</p>
        </div>
      </div>
    ),
  },
  {
    question: 'SRCAS Problem Statement 3',
    answer: (
      <div className="text-left text-sm md:text-base space-y-4">
        <Typography.H6>Problem Statement 3</Typography.H6>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Description:</strong>
          <p className="text-gray-700">This problem statement will be updated soon. Stay tuned for more details.</p>
        </div>
      </div>
    ),
  },
  {
    question: 'SRCAS Problem Statement 4',
    answer: (
      <div className="text-left text-sm md:text-base space-y-4">
        <Typography.H6>Problem Statement 4</Typography.H6>
        <div>
          <strong className="block text-gray-900 font-bold mb-1">Description:</strong>
          <p className="text-gray-700">This problem statement will be updated soon. Stay tuned for more details.</p>
        </div>
      </div>
    ),
  }
];
