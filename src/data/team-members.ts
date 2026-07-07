export type SeedTeamMember = {
  name: string;
  role: string;
  category: 'Board of Directors' | 'Executive Management';
  order: number;
  edu: string;
  summary: string;
  appointed?: boolean;
  imageFile: string; // filename inside src/data/seed-images
};

export const teamMembers: SeedTeamMember[] = [
  // Board of Directors
  {
    name: 'Mukemil Bedru',
    role: 'Board Chairperson',
    category: 'Board of Directors',
    order: 0,
    edu: 'MBA, BA in Management',
    imageFile: 'muk.jpg',
    summary:
      'An MBA graduate from Addis Ababa University and holder of a BA in Management from Haramaya University, he is a seasoned executive with over 17 years of experience spanning finance, consulting, real estate, academia, and governance. He serves as Chairperson and Managing Partner at Elegance Group and Chairman of Credoks Tech Group, and is a co-founder and former Chairman of Hijra Bank. His background includes senior roles at Deloitte and academic work at Addis Ababa University, with extensive experience leading advisory and restructuring projects across multiple regions. He specializes in strategic leadership, corporate governance, organizational design, and Islamic finance.',
  },
  {
    name: 'Tewodros M. Delelegn',
    role: 'V/Board Chairperson',
    category: 'Board of Directors',
    order: 1,
    edu: 'MSc in Telecom Business Administration, BA in Management',
    imageFile: 'tewodros.jpg',
    summary:
      'An MSc graduate in Telecom Business Administration and BA holder in Management from Addis Ababa University, he is a telecom and fintech executive with over 20 years of leadership experience. He currently serves as Managing Director at Credoks Digital Services and Board Chairman of NEO Microfinance. His background includes eight years at Ethio Telecom in senior product development roles, with strong expertise in leadership, innovation, governance, and financial technology.',
  },
  {
    name: 'Habib Mohammed',
    role: 'Board Member',
    category: 'Board of Directors',
    order: 2,
    edu: 'MBA in International Business, BA in Accounting',
    imageFile: 'habib.jpg',
    summary:
      'An MBA graduate in International Business from University of Greenwich and BA holder in Accounting from Jimma University, he is a Fellow Chartered Certified Accountant (FCCA) and a certified member of the Chartered Institute for Securities & Investment (CISI). With over 20 years of leadership experience in banking and corporate management, he has served as Vice President for Banking Business at Hijra Bank and CEO of Yekatit Paper Converting PLC, and spent more than a decade at NIB International Bank in senior leadership roles. He has also worked as an advisor and trainer for the World Bank Group (IFC) and the National Bank of Ethiopia on IFRS and capital markets. He currently serves on the boards of Chartered Advisory Services PLC and Best Western Plus Addis Ababa.',
  },
  {
    name: 'Behailu Aregahgn',
    role: 'Board Member',
    category: 'Board of Directors',
    order: 3,
    edu: 'MBA in International Business, BA in Economics',
    imageFile: 'behailu2.jpg',
    summary:
      'An MBA graduate in International Business from Mekelle University and BA holder in Economics from Debub University, he is an experienced business and technology consultant with a strong background in advisory and operations. He serves as Managing Partner and Lead Consultant at Chartered Advisory Services PLC and represents Global DWC LLC in Ethiopia and East Africa. His experience includes leadership roles at Thabet Technology PLC and WebSprix IT Solutions PLC, as well as extensive work with Ethio Telecom on enterprise and government projects, including major systems such as the National Bank’s EATS platform.',
  },
  {
    name: 'Kalkidan Nigusse',
    role: 'Board Member',
    category: 'Board of Directors',
    order: 4,
    edu: 'Master’s in Marketing Management, Master’s in Development Management, BA in Economics',
    imageFile: 'kalidan.jpg',
    summary:
      'He holds a Master’s in Marketing Management from Addis Ababa University, a Master’s in Development Management from University of Torino, and a BA in Economics from Addis Ababa University. He is the Managing Director of iConnect Digital Services and serves on the boards of NEO Microfinance Institution and Credoks Digital Services PLC. With over 15 years of experience in telecom and digital services, he has held senior leadership roles at Ethio Telecom, contributing to nationwide rebranding, marketing strategy, research, and international business development. He specializes in strategic management, marketing, project leadership, and business growth.',
  },
  {
    name: 'Banteyrga Kebede',
    role: 'Board Member',
    category: 'Board of Directors',
    order: 5,
    edu: 'MBA in Telecom Business Administration, BA in Management',
    imageFile: 'banteyerga.jpg',
    summary:
      'He holds an MBA in Telecom Business Administration and a BA in Management from Addis Ababa University. With over 15 years of leadership experience across telecom, manufacturing, and service sectors, he currently serves as Managing Partner at Chartered Advisory Services PLC and Board Member of NEO Microfinance Institution. Throughout his career, he has held senior roles including CEO and Managing Partner, leading organizational restructuring, operational improvements, and product development initiatives. He has also driven profitability growth, ISO certifications, and HR transformation programs, and is recognized for his strong expertise in leadership, operations, finance, and telecom innovation.',
  },
  {
    name: 'Yitages Tefera',
    role: 'Board Member',
    category: 'Board of Directors',
    order: 6,
    edu: 'Fellow of the Association of Chartered Certified Accountants (FCCA, UK)',
    appointed: true,
    imageFile: 'yitages.jpg',
    summary:
      'He is a Fellow of the Association of Chartered Certified Accountants (FCCA) from Association of Chartered Certified Accountants and a member of the Institute of Chartered Certified Accountants. With over 10 years of experience in auditing, accounting, and risk management, he specializes in audit and assurance services, IFRS and IPSAS consulting, and financial statement preparation and analysis. He has led audit engagements for both business and non-profit organizations, ensuring compliance with international financial reporting standards and Ethiopian legal frameworks, while also providing financial oversight, risk assessment, and advisory services.',
  },
  {
    name: 'Getahun Worku',
    role: 'Board Member',
    category: 'Board of Directors',
    order: 7,
    edu: 'Bachelors of art in Accounting and finance',
    appointed: true,
    imageFile: 'getahun.jpg',
    summary:
      'He holds an LLM in Human Rights and an MBA in Governance and Development, and is currently pursuing a PhD in Law. With over 20 years of experience in legal advisory, compliance, governance, and academic instruction in Ethiopia, she specializes in contract law, labor law, procurement, banking regulation, donor agreements, and institutional governance frameworks. She has provided high-level legal counsel on grant agreements, MOUs, project design, monitoring, and regulatory compliance. Her career includes senior legal roles at NIB International Bank and the Commercial Bank of Ethiopia, alongside academic and advisory positions in higher education and legal institutions. She is a licensed advocate before all Federal Courts of Ethiopia and a member of both the Ethiopian Bar Association and Ethiopian Women Lawyers Association, with strong expertise in governance, compliance, and organizational risk management.',
  },
  {
    name: 'Assan Mohammed Ali',
    role: 'Board Member',
    category: 'Board of Directors',
    order: 8,
    edu: 'MBA in IT Management',
    appointed: true,
    imageFile: 'placeholder.png',
    summary:
      'He holds an MBA in IT Management, an MSc in Information Technology, and a BSc in Computer Science. With over 20 years of experience in digital transformation and IT leadership, he specializes in enterprise systems management, IT governance, and financial technology innovation. He has led major telecom and banking projects, including ERP, BSS/OSS, CRM, billing systems, and digital financial services, with a strong focus on Sharia-compliant Islamic banking solutions. His career includes senior roles at Hijra Bank and Ethio Telecom, where he worked on core banking systems, mobile wallets, business intelligence, and enterprise IT architecture. He provides strategic leadership in digital transformation, retail banking growth, and technology governance, driving innovation and operational resilience.',
  },
  // Executive Management
  {
    name: 'Habib Mohammed',
    role: 'Chief Executive Officer',
    category: 'Executive Management',
    order: 0,
    edu: 'MBA in International Business, BA in Accounting, FCCA, CISI',
    appointed: true,
    imageFile: 'habib2.jpg',
    summary:
      'He holds an MBA in International Business from University of Greenwich and a BA in Accounting from Jimma University, and is a Fellow Chartered Certified Accountant (FCCA) as well as a certified member of the Chartered Institute for Securities & Investment (CISI). With over 20 years of experience in banking, finance, and corporate management, he has served as CEO and Executive Board Member, driving strategic growth and governance across multiple institutions. He was Vice President for Banking Business at Hijra Bank, overseeing treasury, credit risk, and foreign exchange operations, and previously served as CEO of Yekatit Paper Converting PLC, achieving key milestones such as ISO certification and IFRS adoption. He also spent over a decade at NIB International Bank in senior leadership roles. Additionally, he has advised the World Bank Group’s International Finance Corporation on IFRS implementation and currently serves on the boards of Chartered Advisory Services PLC and Best Western Plus Addis Ababa.',
  },
  {
    name: 'Haileleul Kassa',
    role: 'Chief Risk and Compliance Officer',
    category: 'Executive Management',
    order: 1,
    edu: 'MSc in International Business, BA in Economics',
    appointed: true,
    imageFile: 'haile.jpg',
    summary:
      'He holds an MSc in International Business and a BA in Economics, along with professional certifications from CISI, CFI, and Udacity, and is currently pursuing ACCA studies. With over 14 years of experience in banking and corporate strategy, he has held key leadership roles including Director of Corporate Strategy at Ayat Group S.C., where he leads five-year strategic planning, performance systems, and organizational transformation. He also served as Senior Manager of Strategy Planning & Monitoring and Corporate Investment at Hijra Bank, focusing on strategic execution and performance frameworks. Earlier in his career, he worked at Hibret Bank, Nib International Bank, and Global Bank Ethiopia in areas including trade finance, credit, and planning. He specializes in corporate strategy, investment analysis, capital markets, and performance management.',
  },
  {
    name: 'Habtemariam Geta',
    role: 'Head of Corporate Finance and Advisory',
    category: 'Executive Management',
    order: 2,
    edu: 'MBA in Project Management, BSc in Electrical Engineering',
    appointed: true,
    imageFile: 'habte-new.jpg',
    summary:
      "He holds an MSc in Accounting and Finance from Addis Ababa University and a BA in Accounting and Finance from Woldia University. He is currently a Senior Financial Analyst on the Capital Market and Investment Bank Project at Amhara Bank. Previously, he worked as a Lecturer of Accounting and Finance at St. Mary's University and Woldia University. He has also completed investment banking virtual simulations with Citi Bank, Standard Bank, and Fidelity International, as well as a 12-week MBA leadership program from Abilitie. His expertise lies in financial analysis, investment banking, accounting, and finance education.",
  },
  {
    name: 'Agazi Hailesilasse',
    role: 'Securities Trader',
    category: 'Executive Management',
    order: 3,
    edu: 'Bachelors of art in Accounting and finance',
    appointed: true,
    imageFile: 'agazi.jpg',
    summary:
      'He holds bachelor’s degrees in Accounting and Finance, as well as Management. He works in financial trading and market analysis, focusing on monitoring global and local economic trends to identify trading opportunities. His experience includes designing, backtesting, and executing trading strategies across stocks, bonds, and treasury bills using firm capital. He applies strict risk management practices, maintains detailed trade records, and reports performance insights to management, contributing to data-driven investment decision-making.',
  },
];
