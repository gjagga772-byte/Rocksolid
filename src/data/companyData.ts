export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  keyPillars: string[];
  deliverables: string[];
  recommendedFor: string[];
  isProposedOffering: boolean;
}

export interface TrainingProgram {
  id: string;
  title: string;
  category: 'Entrepreneurship' | 'Leadership' | 'Sales' | 'Customer Service' | 'Communication' | 'HR & Org' | 'Custom Corporate';
  level: 'Foundational' | 'Intermediate' | 'Advanced' | 'Executive';
  shortSummary: string;
  intendedAudience: string;
  learningOutcomes: string[];
  deliveryFormat: 'In-Person (Kathmandu/On-Site)' | 'Online Interactive' | 'Hybrid (In-Person & Virtual)' | 'Customizable on Request';
  duration: string; // e.g., "Customizable (Typically 2-3 Days or Modular Sessions)"
  featured?: boolean;
}

export interface ResourceArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  author: string;
  isSampleContent: boolean;
}

export const COMPANY_INFO = {
  name: "Rocksolid Business Solutions Pvt. Ltd.",
  shortName: "Rocksolid Business Solutions",
  tagline: "Building Stronger Businesses Through Training, Strategy & Consultancy",
  proprietor: "Mr. Dipankar Sherpa",
  roleTitle: "Proprietor & Strategic Business Consultant",
  address: "Budhanilkantha Municipality, Ward No. 08, Kathmandu, Nepal",
  primaryPhone: "+977-9851233343",
  phoneRaw: "+9779851233343",
  whatsAppNumber: "9779851233343",
  whatsAppLink: "https://wa.me/9779851233343",
  emailPlaceholder: "inquiry@rocksolid.com.np (Proposed Placeholder)",
  hours: "Sunday – Friday: 9:00 AM – 5:30 PM NPT (Closed Saturdays & Public Holidays)",
  primaryMarket: "Nepalese businesses, entrepreneurs, startups, SMEs, corporate organizations, and institutions seeking professional development and organizational improvement.",
  coordinates: {
    lat: 27.7667,
    lng: 85.3583,
    city: "Kathmandu, Nepal",
    region: "Bagmati Province",
  },
  disclaimer: "Official company details provided by Rocksolid Business Solutions Pvt. Ltd. Specific licenses, credentials, and official corporate registration documents are subject to confirmation prior to binding engagements."
};

export const MISSION_VISION = {
  mission: "To equip individuals and organizations with practical knowledge, professional skills, and strategic guidance that support effective management and sustainable business growth.",
  vision: "To become a trusted business training and consultancy partner for organizations and entrepreneurs in Nepal.",
  missionNote: "Proposed company mission statement, customizable by company management.",
  visionNote: "Proposed company vision statement, customizable by company management."
};

export const CORE_VALUES = [
  {
    title: "Practical Business Relevance",
    description: "Every workshop, strategy session, and tool is built for real-world execution within Nepal's dynamic business environment, not mere textbook theory."
  },
  {
    title: "Client-Centered Customization",
    description: "No two businesses face identical bottlenecks. We align our consulting methodologies and curriculum directly to your team's specific objectives."
  },
  {
    title: "Integrity & Professional Trust",
    description: "We cultivate authentic, transparent relationships, maintaining strict confidentiality with client proprietary data and strategic initiatives."
  },
  {
    title: "Measurable Capability Building",
    description: "Our goal is not dependency, but empowering leaders, managers, and staff with repeatable skills that compound over time."
  },
  {
    title: "Sustainable Long-Term Growth",
    description: "We promote balanced business models, prudent financial habits, and resilient organizational cultures built to weather market fluctuations."
  }
];

export const PROPRIETOR_PROFILE = {
  name: "Mr. Dipankar Sherpa",
  title: "Proprietor & Principal Business Consultant",
  company: "Rocksolid Business Solutions Pvt. Ltd.",
  location: "Kathmandu, Nepal",
  bio: "As the proprietor and driving force behind Rocksolid Business Solutions Pvt. Ltd., Mr. Dipankar Sherpa is dedicated to strengthening the operational foundations of Nepalese enterprises. With a focus on practical business development, organizational discipline, and entrepreneurial empowerment, Mr. Sherpa leads initiatives that bridge the gap between conceptual strategy and everyday commercial execution.",
  focusAreas: [
    "Enterprise Growth & Operational Management",
    "SME Capacity Building & Leadership Training",
    "Tailored Corporate Workshops & Skill Development",
    "Strategic Decision-Making for Nepalese Founders"
  ],
  quote: "Sustainable businesses aren't built on shortcuts—they are forged through solid fundamentals, disciplined execution, and continuous team capability development."
};

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "business-management-consultancy",
    title: "Business Management Consultancy",
    category: "Consultancy & Strategy",
    iconName: "Briefcase",
    tagline: "Streamline operations, optimize internal structures, and sharpen strategic direction.",
    shortDescription: "Strategic planning, operational workflows, organizational assessments, and structured decision support for growing organizations.",
    detailedDescription: "Our business management consultancy assists established enterprises, emerging ventures, and growing SMEs in diagnosing operational bottlenecks, clarifying role accountability, and architecting actionable roadmaps for sustainable growth. All recommendations reflect local market realities in Kathmandu and across Nepal.",
    keyPillars: [
      "Business planning and operational process improvement",
      "Organizational structure and management practices alignment",
      "Comprehensive business performance assessment and KPI establishment",
      "Strategic planning and executive decision support"
    ],
    deliverables: [
      "Operational diagnostic report",
      "Organizational workflow diagrams & role clarity matrix",
      "Strategic execution milestone plan",
      "Quarterly performance review framework"
    ],
    recommendedFor: [
      "SME owners scaling their workforce",
      "Enterprises needing structured management processes",
      "Leadership teams aiming to boost productivity"
    ],
    isProposedOffering: true
  },
  {
    id: "entrepreneurship-startup-development",
    title: "Entrepreneurship & Startup Development",
    category: "Consultancy & Strategy",
    iconName: "Rocket",
    tagline: "Transform promising business ideas into viable, resilient, and market-ready enterprises.",
    shortDescription: "Idea validation, business model design, commercial feasibility analysis, and step-by-step startup launch planning.",
    detailedDescription: "Designed for aspiring entrepreneurs, early-stage founders, and family businesses pivoting into new sectors. We guide founders through the crucial stages of market validation, unit economics, value proposition refinement, and structured business planning before committing significant capital.",
    keyPillars: [
      "Business idea screening and commercial feasibility analysis",
      "Business model canvas development and customer validation",
      "Comprehensive business plan preparation guidance",
      "Early-stage launch planning and initial traction strategies"
    ],
    deliverables: [
      "Completed Business Model Canvas (BMC)",
      "Structured Investor/Bank-ready Business Plan outline",
      "Go-to-market execution checklist",
      "Initial break-even & cashflow projection templates"
    ],
    recommendedFor: [
      "Aspiring Nepalese entrepreneurs launching new ventures",
      "Early-stage startups seeking market validation",
      "Professionals transitioning into business ownership"
    ],
    isProposedOffering: true
  },
  {
    id: "leadership-management-training",
    title: "Leadership & Management Training",
    category: "Professional Training",
    iconName: "Award",
    tagline: "Cultivate confident, accountable leaders who inspire teams and drive measurable results.",
    shortDescription: "Empower departmental heads, mid-level supervisors, and executives with proven management methodologies.",
    detailedDescription: "Strong leaders build enduring companies. This practical program elevates managerial maturity by teaching delegation without losing control, conflict resolution, constructive feedback delivery, and high-stakes problem-solving tailored to cross-generational workplaces in Nepal.",
    keyPillars: [
      "Executive leadership development and strategic mindsets",
      "Effective team management and accountability tracking",
      "Collaborative decision-making and root-cause problem solving",
      "Smart delegation and performance management frameworks"
    ],
    deliverables: [
      "Personal leadership assessment and action plan",
      "Delegation and task-tracking templates",
      "1-on-1 performance coaching blueprints",
      "Team alignment and goal-setting toolkit"
    ],
    recommendedFor: [
      "Mid-level managers stepping into executive responsibilities",
      "Department heads and unit leads",
      "Business founders delegating day-to-day operations"
    ],
    isProposedOffering: true
  },
  {
    id: "sales-marketing-training",
    title: "Sales & Marketing Training",
    category: "Professional Training",
    iconName: "TrendingUp",
    tagline: "Drive revenue growth with ethical, structured, and relationship-driven commercial practices.",
    shortDescription: "B2B and retail sales techniques, consultative selling, client relationship management, and practical brand positioning.",
    detailedDescription: "Sales is the lifeblood of every commercial venture. Our training breaks down the entire revenue cycle—from qualification and overcoming objections to closing and post-sale nurturing—arming your sales force with confidence and repeatable closing techniques.",
    keyPillars: [
      "Modern consultative sales techniques and client engagement",
      "Customer Relationship Management (CRM) mindset and pipeline tracking",
      "Marketing strategy fundamentals tailored for the Nepalese market",
      "Brand positioning, competitive differentiation, and business development"
    ],
    deliverables: [
      "Step-by-step sales pipeline playbook",
      "Objection-handling script guide",
      "Client qualification checklist",
      "Account retention and upselling strategy framework"
    ],
    recommendedFor: [
      "Corporate sales executives and account managers",
      "Business development professionals",
      "Retail managers and commercial frontline staff"
    ],
    isProposedOffering: true
  },
  {
    id: "hr-organizational-development",
    title: "Human Resource & Organizational Development",
    category: "Organizational Improvement",
    iconName: "Users",
    tagline: "Build a motivated, cohesive workforce with clear standards and open communication.",
    shortDescription: "Workplace culture alignment, internal team dynamics, employee engagement, and structured performance standards.",
    detailedDescription: "Organizations thrive when employees understand their purpose, trust their colleagues, and possess clear avenues for advancement. We guide leadership teams in shaping workplace harmony, reducing unforced turnover, and creating an atmosphere of professional dedication.",
    keyPillars: [
      "Team cohesion, cross-departmental trust, and workplace communication",
      "Employee engagement strategies and productivity enhancement",
      "Workplace professionalism, ethics, and code of conduct standards",
      "Organizational development practices and retention strategies"
    ],
    deliverables: [
      "Workplace culture diagnostic and recommendations",
      "Standard employee orientation & onboarding roadmap",
      "Performance evaluation rubrics",
      "Internal communication protocols"
    ],
    recommendedFor: [
      "Growing companies with 10 to 200+ employees",
      "HR practitioners seeking organizational development tools",
      "Management teams addressing employee retention"
    ],
    isProposedOffering: true
  },
  {
    id: "financial-literacy-business-planning",
    title: "Financial Literacy & Business Planning",
    category: "Financial Management",
    iconName: "PieChart",
    tagline: "Demystify numbers, control working capital, and plan for consistent business profitability.",
    shortDescription: "Budgeting fundamentals, cash-flow monitoring, cost structure analysis, and financial planning for non-finance managers.",
    detailedDescription: "A practical, non-academic course tailored for business owners and managers. Learn how to read management reports, calculate gross and net margins, manage customer credit cycles, and prevent common cash-flow crises before they jeopardize business continuity.",
    keyPillars: [
      "Business budgeting fundamentals and variance tracking",
      "Cash-flow management awareness and working capital discipline",
      "Financial planning and unit economics for entrepreneurs",
      "Understanding fixed versus variable costs and true profitability"
    ],
    deliverables: [
      "12-month rolling cash flow forecast spreadsheet template",
      "Break-even analysis worksheet",
      "Budget vs. actual tracking model",
      "Key financial metrics cheat-sheet for executives"
    ],
    recommendedFor: [
      "Business owners without formal financial backgrounds",
      "Department heads managing operational budgets",
      "Entrepreneurs preparing for commercial financing"
    ],
    isProposedOffering: true
  },
  {
    id: "communication-professional-skills",
    title: "Communication & Professional Skills",
    category: "Professional Training",
    iconName: "MessageSquare",
    tagline: "Elevate executive presence, sharpen presentation clarity, and master persuasive negotiation.",
    shortDescription: "Professional verbal and written communication, client service etiquette, negotiation, and executive presence.",
    detailedDescription: "Clear communication eliminates costly misunderstandings and strengthens client trust. This interactive training equips professionals with the poise, listening skills, presentation mastery, and negotiation tactics needed to represent your brand with distinction.",
    keyPillars: [
      "Clear business communication and professional correspondence",
      "Persuasive presentation skills and meeting facilitation",
      "Negotiation fundamentals and win-win conflict resolution",
      "Customer service etiquette and client-facing professionalism"
    ],
    deliverables: [
      "Professional business email & proposal writing guide",
      "Public speaking & presentation structure template",
      "Negotiation preparation checklist",
      "Service recovery steps for handling difficult clients"
    ],
    recommendedFor: [
      "Client-facing professionals and relationship managers",
      "Executive assistants and administrative coordinators",
      "Professionals seeking greater influence in meetings"
    ],
    isProposedOffering: true
  },
  {
    id: "customized-corporate-training",
    title: "Customized Corporate Training",
    category: "Custom Workshops",
    iconName: "Layers",
    tagline: "Curriculum engineered specifically around your company's distinct challenges and growth goals.",
    shortDescription: "Tailored workshops, interactive case studies, in-house team alignment, and measurable post-training support.",
    detailedDescription: "Off-the-shelf training often misses the specific nuances of your organization. We conduct a preliminary training needs assessment, co-design real-world scenarios relevant to your industry, and deliver high-energy, interactive sessions at your premises or designated venue.",
    keyPillars: [
      "Preliminary training needs assessment (TNA) and executive interview",
      "Custom curriculum tailored to organizational culture and objectives",
      "Interactive group workshops, role-playing, and practical case studies",
      "Post-training feedback evaluation and implementation follow-up"
    ],
    deliverables: [
      "Customized training syllabus and participant workbooks",
      "Live interactive workshop delivery (Kathmandu or nationwide)",
      "Comprehensive post-training feedback & participant evaluation report",
      "Recommended 30-day reinforcement roadmap"
    ],
    recommendedFor: [
      "Corporations addressing specific departmental skill deficits",
      "Institutions hosting annual retreats and team alignment days",
      "NGOs and development agencies upgrading operational staff"
    ],
    isProposedOffering: true
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "tp-ent-01",
    title: "Entrepreneurship & Business Model Mastery",
    category: "Entrepreneurship",
    level: "Foundational",
    shortSummary: "A step-by-step masterclass covering idea validation, revenue modeling, market sizing, and lean execution for Nepalese startups.",
    intendedAudience: "Aspiring entrepreneurs, early-stage founders, innovators, and family business successors in Nepal.",
    learningOutcomes: [
      "Validate commercial feasibility using proven market testing techniques",
      "Structure a sustainable business model with sound unit economics",
      "Draft a structured business plan ready for stakeholders and partners",
      "Establish early customer acquisition channels with minimal spend"
    ],
    deliveryFormat: "Customizable on Request",
    duration: "Customizable (Typically 2-3 Days or Modular Sessions)",
    featured: true
  },
  {
    id: "tp-lead-02",
    title: "Strategic Leadership & Management Excellence",
    category: "Leadership",
    level: "Intermediate",
    shortSummary: "Equip managers and team leads with critical competencies in goal setting, effective delegation, accountability, and team motivation.",
    intendedAudience: "Branch managers, department heads, project managers, and newly promoted supervisors.",
    learningOutcomes: [
      "Transition smoothly from individual contributor to high-impact manager",
      "Delegate responsibilities effectively while sustaining accountability",
      "Lead cross-functional teams through organizational transitions",
      "Conduct constructive performance feedback dialogues with confidence"
    ],
    deliveryFormat: "Customizable on Request",
    duration: "Customizable (Typically 1-2 Days or Weekend Intensive)",
    featured: true
  },
  {
    id: "tp-sales-03",
    title: "High-Impact Consultative Selling & Negotiation",
    category: "Sales",
    level: "Intermediate",
    shortSummary: "Master consultative sales approaches that build trust, uncover deep client pain points, handle price objections, and close deals.",
    intendedAudience: "Corporate sales teams, business development managers, account executives, and commercial representatives.",
    learningOutcomes: [
      "Structure persuasive sales discovery conversations with prospective clients",
      "Navigate price resistance and emphasize value over raw discounting",
      "Manage customer follow-ups and pipeline velocity systematically",
      "Close high-value contracts while safeguarding healthy profit margins"
    ],
    deliveryFormat: "Customizable on Request",
    duration: "Customizable (Typically 2 Days with Practical Roleplay)",
    featured: true
  },
  {
    id: "tp-cs-04",
    title: "Service Excellence & Customer Retention Mastery",
    category: "Customer Service",
    level: "Foundational",
    shortSummary: "Turn everyday customer touchpoints into loyalty-generating experiences that differentiate your organization in competitive markets.",
    intendedAudience: "Frontline customer service personnel, receptionists, relationship officers, and hospitality staff.",
    learningOutcomes: [
      "Internalize positive corporate customer etiquette and empathetic listening",
      "De-escalate angry or dissatisfied customers with professional composure",
      "Reduce customer churn through proactive service recovery steps",
      "Establish repeatable service consistency across physical and digital channels"
    ],
    deliveryFormat: "Customizable on Request",
    duration: "Customizable (Typically 1-2 Full Days)",
    featured: false
  },
  {
    id: "tp-comm-05",
    title: "Workplace Communication & Executive Presence",
    category: "Communication",
    level: "Foundational",
    shortSummary: "Enhance interpersonal clarity, persuasive presentation abilities, professional email etiquette, and cross-team collaboration.",
    intendedAudience: "Corporate staff, mid-level professionals, administrative officers, and customer-facing teams.",
    learningOutcomes: [
      "Craft concise, impactful business emails, memos, and internal briefs",
      "Deliver confident, structured presentations to stakeholders and clients",
      "Navigate workplace conflicts productively through active listening",
      "Project professional credibility and composure during team interactions"
    ],
    deliveryFormat: "Customizable on Request",
    duration: "Customizable (Typically 1-2 Days or Half-Day Workshops)",
    featured: false
  },
  {
    id: "tp-fin-06",
    title: "Financial Awareness & Cash Flow for Business Owners",
    category: "Entrepreneurship",
    level: "Intermediate",
    shortSummary: "Demystify financial reports, calculate true margins, control overhead, and manage liquidity without getting lost in complex accounting jargon.",
    intendedAudience: "Business owners, managing directors, founders, and non-financial managers.",
    learningOutcomes: [
      "Understand the vital difference between profitability and actual cash flow",
      "Analyze income statements and balance sheets to spot operational risks",
      "Formulate realistic operating budgets and monitor financial variance",
      "Implement credit terms and receivable collection disciplines"
    ],
    deliveryFormat: "Customizable on Request",
    duration: "Customizable (Typically 2 Days with Financial Case Studies)",
    featured: true
  },
  {
    id: "tp-org-07",
    title: "Organizational Alignment & High-Performance Teams",
    category: "HR & Org",
    level: "Intermediate",
    shortSummary: "Build resilient workplace culture, establish clear KPIs, eliminate silos, and foster a shared sense of collective mission.",
    intendedAudience: "Senior management, HR leads, entrepreneurs scaling team size from 10 to 50+ staff.",
    learningOutcomes: [
      "Align departmental priorities with overall corporate vision",
      "Design clear Job Descriptions (JDs) and Key Performance Indicators (KPIs)",
      "Establish positive recognition systems that reduce employee attrition",
      "Facilitate productive team meetings that yield clear action items"
    ],
    deliveryFormat: "Customizable on Request",
    duration: "Customizable (Typically 2 Days or Modular Sessions)",
    featured: false
  },
  {
    id: "tp-corp-08",
    title: "Bespoke Corporate Capability Workshop",
    category: "Custom Corporate",
    level: "Executive",
    shortSummary: "Exclusively designed training intervention engineered around your specific organizational audit, skill gaps, and strategic targets.",
    intendedAudience: "Corporate enterprises, banking and finance teams, NGOs, hospitality groups, and educational boards.",
    learningOutcomes: [
      "Address organization-specific operational and behavioral roadblocks",
      "Achieve team consensus on quarterly and annual growth targets",
      "Receive actionable post-training participant evaluations and recommendations",
      "Establish ongoing measurement frameworks to ensure lasting skill adoption"
    ],
    deliveryFormat: "Customizable on Request",
    duration: "Customizable according to organizational requirements",
    featured: true
  }
];

export const CONSULTANCY_PROCESS = [
  {
    step: "01",
    title: "Needs Assessment & Discovery",
    description: "We meet with your leadership to explore your operational landscape, understand existing bottlenecks, and define clear business goals."
  },
  {
    step: "02",
    title: "Tailored Strategy & Curriculum",
    description: "We co-develop a targeted intervention—whether a customized training syllabus or operational roadmap—specifically for your team's context."
  },
  {
    step: "03",
    title: "Interactive Delivery & Coaching",
    description: "We conduct hands-on training workshops or consultancy sessions featuring real-world scenarios, practical tools, and active participation."
  },
  {
    step: "04",
    title: "Review & Sustained Capability",
    description: "We evaluate outcomes, provide leadership with actionable recommendations, and supply follow-up tools to ensure lasting institutional value."
  }
];

export const TARGET_SECTORS = [
  {
    title: "Emerging Startups & Founders",
    description: "Guidance on business modeling, commercial viability, cash flow management, and scalable team foundations.",
    icon: "Compass"
  },
  {
    title: "Small & Medium Enterprises (SMEs)",
    description: "Operational restructuring, supervisory training, sales process standardization, and sustainable expansion advice.",
    icon: "Building"
  },
  {
    title: "Corporate Teams & Divisions",
    description: "Executive leadership training, consultative sales workshops, communication polish, and cross-departmental alignment.",
    icon: "Building2"
  },
  {
    title: "Educational & Training Institutions",
    description: "Faculty management skills, administrative operational excellence, student career preparedness, and organizational design.",
    icon: "GraduationCap"
  },
  {
    title: "NGOs & Non-Profit Organizations",
    description: "Project management practices, team leadership, stakeholder communication, and organizational productivity.",
    icon: "HeartHandshake"
  },
  {
    title: "Retail & Service Providers",
    description: "Frontline customer service excellence, client dispute handling, staff retention, and operational workflow enhancement.",
    icon: "Store"
  }
];

export const FAQS = [
  {
    question: "Where is Rocksolid Business Solutions Pvt. Ltd. located?",
    answer: "Our registered office is located at Budhanilkantha Municipality, Ward No. 08, Kathmandu, Nepal. We provide in-person training and consultancy services across Kathmandu Valley, as well as on-site sessions for organizations nationwide upon arrangement."
  },
  {
    question: "How can I request a consultation or customized corporate training?",
    answer: "You can reach us directly via telephone at +977-9851233343, send a message through our official WhatsApp (+977 9851233343), or complete our online consultation inquiry form on this website. We typically respond within one business day."
  },
  {
    question: "Do you offer customized training programs for specific corporate teams?",
    answer: "Yes. In fact, customized corporate training is one of our primary specialties. We collaborate closely with your leadership team to evaluate your workforce skill gaps, company culture, and operational goals before designing the workshop syllabus."
  },
  {
    question: "What formats of training delivery are available?",
    answer: "Training can be conducted in-person at your corporate premises, at a designated venue in Kathmandu, or via interactive online sessions depending on your team's geographical distribution and schedule."
  },
  {
    question: "How are the training duration and schedule determined?",
    answer: "Training durations are fully customizable. Depending on the depth of the curriculum, programs can range from focused half-day intensive workshops to multi-day modular executive programs. Exact dates and timings are agreed upon during initial consultations."
  },
  {
    question: "Does Rocksolid Business Solutions provide licensed legal or audited accounting services?",
    answer: "No. Rocksolid Business Solutions Pvt. Ltd. specializes in business training, management consultancy, and organizational development. We do not provide regulated legal advice, statutory external financial audits, or licensed tax filings."
  }
];

export const INSIGHTS_ARTICLES: ResourceArticle[] = [
  {
    id: "art-01",
    title: "Building Resilient Operations: A Practical Guide for Nepalese SMEs",
    slug: "building-resilient-operations-nepal-smes",
    category: "Management Strategy",
    readTime: "5 min read",
    date: "October 2026",
    summary: "How growing businesses in Kathmandu Valley can move beyond ad-hoc crisis management toward structured, predictable operational workflows.",
    content: [
      "In Nepal's fast-evolving business landscape, many small and medium-sized enterprises begin with immense entrepreneurial passion. However, as the customer base expands and team size crosses 10 to 15 employees, informal communication channels frequently start breaking down.",
      "Key challenges include owner dependency—where every decision requires the founder's personal sign-off—and unclear role expectations. To build operational resilience, owners must document primary processes, clearly delineate departmental responsibilities, and schedule regular weekly review meetings.",
      "By instituting standard operating guidelines for sales inquiries, order fulfillment, and client feedback, businesses free up executive bandwidth to focus on long-term strategy rather than day-to-day firefighting."
    ],
    author: "Rocksolid Business Solutions Editorial",
    isSampleContent: true
  },
  {
    id: "art-02",
    title: "The Discipline of Cash Flow: Why Profitability on Paper Is Not Enough",
    slug: "discipline-of-cash-flow-for-entrepreneurs",
    category: "Financial Literacy",
    readTime: "6 min read",
    date: "October 2026",
    summary: "Understanding the crucial distinction between accounting profit and real-time bank liquidity, especially when managing trade credit in Nepal.",
    content: [
      "One of the most frequent causes of early-stage enterprise distress is the assumption that sales revenue equals available cash. In sectors where 30 to 90-day credit cycles are customary, a business may report strong monthly sales while simultaneously struggling to meet immediate payroll or vendor obligations.",
      "A disciplined business owner maintains a rolling 13-week cash flow projection. This tool tracks actual cash inflows and outflows rather than theoretical receivables.",
      "Establishing strict credit policies, requesting upfront mobilization advances, and conducting polite but structured credit follow-ups are foundational practices that preserve financial stability during market contractions."
    ],
    author: "Rocksolid Business Solutions Editorial",
    isSampleContent: true
  },
  {
    id: "art-03",
    title: "Developing First-Time Managers: Bridging the Capability Gap",
    slug: "developing-first-time-managers-capability-gap",
    category: "Leadership Development",
    readTime: "4 min read",
    date: "October 2026",
    summary: "Why promoting your top functional specialist into a management role requires deliberate leadership training, not just a new job title.",
    content: [
      "Across corporate teams and family-owned enterprises alike, a frequent practice is promoting the most skilled technical employee—the best salesperson, the sharpest accountant, or the top engineer—to supervise a department.",
      "However, individual execution and managerial leadership demand fundamentally distinct skill sets. First-time managers often struggle with delegation, feeling that completing the task themselves is faster than coaching subordinates.",
      "Providing structured supervisory training in empathetic listening, constructive feedback, and workload prioritization prevents burnout and fosters high team morale."
    ],
    author: "Rocksolid Business Solutions Editorial",
    isSampleContent: true
  },
  {
    id: "art-04",
    title: "Elevating Customer Service from a Department to a Corporate Culture",
    slug: "elevating-customer-service-corporate-culture",
    category: "Customer Experience",
    readTime: "5 min read",
    date: "October 2026",
    summary: "How service excellence drives repeat client business and powerful word-of-mouth recommendations throughout Nepal's interconnected market.",
    content: [
      "In a tightly knit commercial community like Nepal, a company's reputation travels quickly. While competitors can easily duplicate products or match pricing, an authentic, responsive customer service culture is difficult to replicate.",
      "Customer service begins long before a transaction and continues well after the final invoice. It encompasses phone etiquette, prompt response times, clarity in commitments, and grace during service recovery.",
      "When organizations invest in frontline training and empower staff to resolve client concerns promptly, customer loyalty surges, significantly lowering customer acquisition costs over the long run."
    ],
    author: "Rocksolid Business Solutions Editorial",
    isSampleContent: true
  }
];

export const COMPANY_VERIFICATION_CHECKLIST = [
  {
    id: "email",
    title: "Official Corporate Email Address",
    status: "Placeholder Active",
    currentValue: "inquiry@rocksolid.com.np",
    actionNeeded: "Provide official company email domain (e.g. info@rocksolidsolutions.com.np or similar) to replace the clearly labeled placeholder."
  },
  {
    id: "registration",
    title: "Company Registration / PAN Details",
    status: "Placeholder Active",
    currentValue: "Subject to verification",
    actionNeeded: "Furnish Company Registrar of Companies (CRO) number and Permanent Account Number (PAN) for placement in legal and footer notices."
  },
  {
    id: "logo",
    title: "Official Corporate Logo Vector / Asset",
    status: "Text & Symbol Logo Active",
    currentValue: "Clean geometric growth emblem & typography",
    actionNeeded: "Easily replace the built-in SVG logo component with the official finalized high-resolution PNG or SVG brand file whenever ready."
  },
  {
    id: "credentials",
    title: "Certifications & External Accreditations",
    status: "Strictly Unclaimed",
    currentValue: "No fabricated awards or accreditations displayed",
    actionNeeded: "Add verified training certifications or professional memberships when formally granted."
  },
  {
    id: "testimonials",
    title: "Client Testimonials & Case Studies",
    status: "Pending Verified Approvals",
    currentValue: "No fabricated quotes or client logos displayed",
    actionNeeded: "Publish signed client references, case studies, or institutional logos once written client permission is granted."
  }
];
