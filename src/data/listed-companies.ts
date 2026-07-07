export type SeedListedCompany = {
  symbol: string;
  companyName: string;
  order: number;
  marketClassification: string;
  listedCapital: string;
  listedCapitalIncludingPremium?: string;
  listedShares: string;
  shareholders: string;
  securityType?: string;
  natureOfBusiness?: string;
  yearOfFormation?: string;
  dateOfIncorporation?: string;
  dateListed?: string;
  companyAddress?: string;
  telephone?: string;
  email?: string;
  website?: string;
  auditor?: string;
  boardOfDirectors?: { value: string }[];
  sector?: string;
  subSector?: string;
  prospectus?: { label: string; url: string };
  financialStatements?: { label: string; url: string }[];
};

export const listedCompanies: SeedListedCompany[] = [
  {
    symbol: 'WGBX',
    companyName: 'Wegagen Bank Share Company',
    order: 0,
    marketClassification: 'Main Market',
    listedCapital: '6,218,635,000',
    listedShares: '6,218,635',
    shareholders: '14,549',
    securityType: 'Equity – Ordinary Shares',
    natureOfBusiness: 'Financial Services – Banking',
    dateOfIncorporation: '11 June 1997',
    dateListed: '10 January 2025',
    companyAddress:
      'Addis Ababa, Kirkos Sub-City, Wereda 10, House No. New Wegagen Tower, Ras Mekonnen Street, In front Addis Ababa Stadium',
    telephone: '+251-115-523800',
    email: 'info@wegagenbanksc.com.et',
    website: 'https://www.wegagen.com',
    auditor: 'Tafesse, Shisema, and Ayelew Certified Audit Partnership',
    boardOfDirectors: [
      { value: 'Ato Abdishu Hussien (Board Chairperson)' },
      { value: 'Ato Woldegabriel Naizghi (Board Vice Chairperson)' },
      { value: 'Ato Fikru Jiregna (Board Member)' },
      { value: 'Ato Fithanegest Gebru (Board Member)' },
      { value: 'Ato Gebreegziabher Hadush (Board Member)' },
      { value: 'Ato Hassen Yesuf (Board Member)' },
      { value: 'Ato Surfel Berhe Weldu (Board Member)' },
      { value: 'Ato Tesfatsion Desta Tesfay (Board Member)' },
      { value: 'Ato Alemseged Assefa Abera (Board Member)' },
      { value: 'Ato Zenfu Asfaw Gebretinsae (Board Member)' },
    ],
    sector: 'Financial Services',
    subSector: 'Banking',
    prospectus: {
      label: 'Wegagen Bank S.C Prospectus for Registration of Shares Currently Held by Shareholders',
      url: 'https://esx.et/wp-content/uploads/2025/03/Wegagen_Bank_S_C_Prospectus-for-Registration-of-Shares-Currently-Held-by-Shareholders.pdf',
    },
    financialStatements: [
      {
        label: 'Wegagen Bank Financial Statement 2024-25',
        url: 'https://esx.et/wp-content/uploads/2025/10/Wegagen-Bank-S.C-Financial-Statements-2024-2025.pdf',
      },
      {
        label: 'Unaudited Interim Financial Statements for the six months ended 31 December 2024',
        url: 'https://esx.et/wp-content/uploads/2025/03/Unaudited-Interim-Financial-Statements-for-the-six-months-ended-31-December-2024.pdf',
      },
      {
        label: 'Wegagen Bank Annual Report 2024-25',
        url: 'https://esx.et/wp-content/uploads/2025/10/Wegagen_Bank_2024_25_Annual_Report_4c4ff4570b.pdf',
      },
      {
        label: 'Wegagen Bank Annual Report 2023-24',
        url: 'https://esx.et/wp-content/uploads/2025/03/Wegagen_Bank_Annual_Report_2023-24.pdf',
      },
      {
        label: 'Wegagen Bank Annual Report 2022-23',
        url: 'https://esx.et/wp-content/uploads/2025/03/Wegagen_Bank_Annual_Report_2022-23.pdf',
      },
      {
        label: 'Wegagen Bank Annual Report 2021-22',
        url: 'https://esx.et/wp-content/uploads/2025/03/Wegagen_Bank_Annual_Report_2021-22.pdf',
      },
    ],
  },
  {
    symbol: 'GDAB',
    companyName: 'Gadaa Bank Share Company',
    order: 1,
    marketClassification: 'Main Market',
    listedCapital: '1,232,728,000',
    listedShares: '1,232,728',
    shareholders: '31,136',
    securityType: 'Equity – Ordinary Shares',
    natureOfBusiness: 'Financial Services – Banking',
    dateOfIncorporation: '26 April 2022',
    dateListed: '13 June 2025',
    companyAddress: 'Head Office | Gotera | Kirkos, SubCity W-03, HNo-#745',
    telephone: '+251-116-392578',
    email: 'info@gadaabank.com.et',
    website: 'https://gadaabank.com.et',
    auditor: 'TEWODROS AND FIKRE AUDIT SERVICES PARTNERSHIP CHARTERED CERTIFIED ACCOUNTANTS',
    boardOfDirectors: [
      { value: 'Dr. Hassan Hussien Kedir (Board Chairperson)' },
      { value: 'Mr. Hailu Ifa Gonfa (Board V/Chairperson)' },
      { value: 'Dr. Degefa Duresa Obbo (Member of the Board)' },
      { value: 'Eng. Abdo galeto Anota (Member of the Board)' },
      { value: 'Dr. Birhanu Assefa Demissie (Member of the Board)' },
      { value: 'Mr. Shiferaw Rufie Bodo (Member of the Board)' },
      { value: 'Mr. Wassihun Amenu Tiyiti (Member of the Board)' },
      { value: 'Mr. Hamdeno Mideso Woya (Member of the Board)' },
      { value: 'Mrs. Semira Mohhamed Abdella (Member of the Board)' },
      { value: 'Mr. Alazar Adula Yatene (Member of the Board)' },
      { value: 'Dr. Gutu Teso Boka (Member of the Board)' },
    ],
    sector: 'Financial Services',
    subSector: 'Banking',
    prospectus: {
      label: 'Gadaa Bank Prospectus',
      url: 'https://esx.et/wp-content/uploads/2025/06/GB-Final-Propsectus-Dated-June-17-2025.pdf',
    },
    financialStatements: [
      {
        label: 'Audited Financial Statement for the year ended 30 June 2025',
        url: 'https://esx.et/wp-content/uploads/2025/11/Audited-Financial-Statement-for-the-year-ended-30-June-2025.pdf',
      },
      {
        label: 'Gadaa Bank Financial Statement 2024-2025',
        url: 'https://esx.et/wp-content/uploads/2025/10/Gadaa-Bank-Financial-Statment-2024-2025.pdf',
      },
      {
        label: 'Unaudited Interim Financial Statement December 2024',
        url: 'https://esx.et/wp-content/uploads/2025/06/Unaudited-Interim-Financial-Statement-December-20241-1.pdf',
      },
      {
        label: 'Gadaa Bank Annual Report 2023-24',
        url: 'https://esx.et/wp-content/uploads/2025/06/Gadaa-Bank-2023-24-Annual-Report.pdf',
      },
      {
        label: 'Gadaa Bank Annual Report 2022-23',
        url: 'https://esx.et/wp-content/uploads/2025/06/Gadaa-Bank-2023-24-Annual-Report.pdf',
      },
    ],
  },
  {
    symbol: 'TELE',
    companyName: 'Ethio-Telecom Share Company',
    order: 2,
    marketClassification: 'Main Market',
    listedCapital: '1,069,014,900',
    listedCapitalIncludingPremium: '3,207,044,700',
    listedShares: '10,690,149',
    shareholders: '47,305',
    securityType: 'Equity – Ordinary Shares',
    natureOfBusiness: 'Telecoms, Infrastructure Sharing, and Mobile Financial Services',
    yearOfFormation: '1894 GC',
    dateOfIncorporation: '01 July 2024 (as Share Company)',
    dateListed: '25 June 2025',
    companyAddress: 'Addis Ababa, Lideta Sub-City, Woreda 10, House No. New P.O.Box 1047',
    telephone: '+251-115-510500',
    email: '994@ethionet.et',
    website: 'https://www.ethiotelecom.et',
    auditor: 'Audit Services Corporation',
    boardOfDirectors: [
      { value: 'H.E Temesgen Tiruneh (Board Chairman)' },
      { value: 'H.E Dr. Eyob Tekalign (Board Deputy Chairman)' },
      { value: 'H.E Ato Worku Gachena (Board member)' },
      { value: 'H.E Ato Muluneh Desalegn (Board member)' },
      { value: 'H.E Ato Yodahe Arayaselassie (Board member)' },
      { value: 'Ato Kasahun Seboka (Board member)' },
    ],
    sector: 'Telecom Services',
    subSector: 'Telecom Services, Infrastructure Sharing, and Mobile Financial Services',
    prospectus: {
      label: 'Ethio Telecom Prospectus',
      url: 'https://esx.et/wp-content/uploads/2025/06/Ethio-Telecom-Share-Company-Prospectus.pdf',
    },
    financialStatements: [
      {
        label: 'Three years historical financial information (2022-2024)',
        url: 'https://esx.et/wp-content/uploads/2025/06/Ethio-Telecom-Share-Company-Three-years-historical-financial-information-2022-2024.pdf',
      },
    ],
  },
];
