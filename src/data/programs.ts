import { BookOpen, Compass, Users, Award, LucideIcon } from 'lucide-react';

export type ProgramBarrier = {
  title: string;
  description: string;
};

export type Program = {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  problemHeadline: string;
  problemCopy: string;
  problemBarriers?: ProgramBarrier[];
  solutionHeadline: string;
  solutionCopy: string;
  overviewHeadline: string;
  overviewCopy: string;
  overviewList?: string[];
  ctaHeadline: string;
  ctaButtonText: string;
  ctaLink: string;
};

export const programs: Program[] = [
  {
    id: 'lamp',
    title: 'LAMP',
    subtitle: 'Leadership and Management Program',
    icon: BookOpen,
    description: 'A 6-month journey covering mission-critical areas of management to equip and empower managers to become better leaders who make quality decisions.',
    problemHeadline: 'Are Barriers Stunting Your Business Growth?',
    problemCopy: 'Many organizations face critical roadblocks that prevent scale and success. These include:',
    problemBarriers: [
      {
        title: 'The Vision Barrier',
        description: 'Only a small percentage of the workforce understands the vision and how it relates to daily strategy.'
      },
      {
        title: 'The Management Barrier',
        description: 'Executive teams spend less than one hour per month discussing strategy.'
      },
      {
        title: 'The People & Process Barrier',
        description: 'Do you have the right people in the right seats using the right systems?'
      }
    ],
    solutionHeadline: 'Equip Your Managers to Drive Performance',
    solutionCopy: 'The Leadership and Management Program (LAMP) is designed to equip and empower managers to become better leaders who make quality decisions. We help you effectively and efficiently drive performance, direct productivity, and propel business growth.',
    overviewHeadline: 'A 6-Month Transformational Journey',
    overviewCopy: 'For training to have a lasting impact, leaders need a sustained curriculum. LAMP is a 6-month journey that covers mission-critical areas of management. Rather than standard classroom training, the LAMP methodology combines high-impact learning with one-on-one coaching to integrate new skills into day-to-day activities. We pair this with peer-to-peer conferences that surface shared experiences and offer vital accountability.\n\nOur proprietary curriculum covers everything from foundational "Leadership in 3D" to navigating complex organizational politics, managing failure, and driving change.',
    ctaHeadline: 'Want to see the exact modules and frameworks we use to transform managers into strategic leaders?',
    ctaButtonText: 'Download the Full LAMP Curriculum & Syllabus',
    ctaLink: '/contact?program=lamp'
  },
  {
    id: 'bold',
    title: 'BOLD',
    subtitle: 'Business Oversight Leadership Development',
    icon: Compass,
    description: 'Designed to help strategic and legacy leaders strip away the noise and cultivate the acute self-awareness necessary to define and own your unique leadership journey.',
    problemHeadline: 'What is the Real Job of a Leader?',
    problemCopy: '"The manager who comes up with the right solution to the wrong problem is more dangerous than the manager who comes up with the wrong solution to the right problem." — Peter F. Drucker\n\nLeadership at the highest level requires immense clarity, and the greatest threat to a strategic leader is a lack of prioritization.',
    solutionHeadline: 'Ruthless Prioritization and Self-Awareness',
    solutionCopy: 'Effective leaders make tough decisions through ruthless prioritization. This critical ability is brought on by an acute sense of self-awareness regarding your capabilities, strengths, and weaknesses.',
    overviewHeadline: 'Program Overview',
    overviewCopy: 'BOLD (Business Oversight Leadership Development) is designed to help strategic and legacy leaders strip away the noise. We guide you to cultivate the acute self-awareness necessary to define and own your unique leadership journey. Let\'s get BOLD.',
    ctaHeadline: 'Discover the frameworks we use to help executives define their leadership journey.',
    ctaButtonText: 'Request the BOLD Program Overview',
    ctaLink: '/contact?program=bold'
  },
  {
    id: 'lead-coach',
    title: 'LEAD COACH®',
    subtitle: 'Cultivate the right people-practices',
    icon: Users,
    description: 'Workshops entirely focused on boosting a leader\'s capacity to foster growth in others by applying the Law of the Harvest.',
    problemHeadline: 'A Team is Only as Strong as Its Growth Environment',
    problemCopy: 'Managing differences, retaining great talent, and identifying barriers to success are some of the hardest challenges a leader will face. Without the right people-practices, even the most talented teams will stagnate.',
    solutionHeadline: 'Cultivate the Right People-Practices',
    solutionCopy: 'LEAD COACH® workshops are entirely focused on boosting a leader\'s capacity to foster growth in others. We teach you how to apply the Law of the Harvest when it comes to your talent: Condition the soil, Sow the seed, Water it, and Reap the harvest.',
    overviewHeadline: 'Transforming Managers into Mentors',
    overviewCopy: 'Through the proprietary LEAD COACH® framework, your leaders will learn how to:',
    overviewList: [
      'Create a deeply embedded coaching culture.',
      'Sharpen coaching skills to attract and retain top-tier talent.',
      'Facilitate and catalyze crucial conversations.',
      'Groom high-potential performers and orchestrate learning opportunities.'
    ],
    ctaHeadline: 'Ready to transform your leadership team into world-class coaches?',
    ctaButtonText: 'Get the LEAD COACH® Workshop Details',
    ctaLink: '/contact?program=lead-coach'
  },
  {
    id: 'leadxprnc',
    title: 'LEADXPRNC®',
    subtitle: 'Executive Coaching Program',
    icon: Award,
    description: 'A revolutionary and transformational 8-month Executive Coaching program curated around the proprietary Forward Surge 10Ps Leadership Framework.',
    problemHeadline: 'The Executive Isolation Challenge',
    problemCopy: 'For executives and C-suite leaders, maintaining a cutting-edge leadership presence while driving immense corporate performance can be an isolating and overwhelming task. How do you refine your personal influence to inspire an entire organization?',
    solutionHeadline: '8 Months to Executive Transformation',
    solutionCopy: 'LEADXPRNC® is a revolutionary and transformational 8-month Executive Coaching program. Curated around the proprietary Forward Surge 10Ps Leadership Framework, this platform uses personal leadership branding as an instrument for profound change.',
    overviewHeadline: 'Program Overview',
    overviewCopy: 'Over the course of 8 months, executives dive deep into understanding their personal influence and enhancing their self-awareness to drive both personal and corporate performance. The ultimate goal of LEADXPRNC® is to achieve unmatched competence, productivity, and profitability, giving leaders the tools necessary to deliver true cutting-edge effectiveness.',
    ctaHeadline: 'Want to explore the proprietary 10Ps Leadership Framework and see if this coaching program is a fit for you?',
    ctaButtonText: 'Request the LEADXPRNC® Brochure',
    ctaLink: '/contact?program=leadxprnc'
  }
];
