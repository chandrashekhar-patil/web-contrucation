export const privacyLinks = [
  { title: "Privacy & Security", path: "/privacy-and-security" },
  { title: "Data Management Policy", path: "/privacy-and-security#data-management" },
  { title: "Responsible Use Policy", path: "/privacy-and-security#responsible-use" },
];

export const privacyData = {
  dataManagementPolicy: {
    id: "data-management",
    title: "DHD Data Management Policy",
    effectiveDate: "Effective upon approval by DHD Senior Team",
    issuingAuthorities: [
      "Executive Vice President for Finance and Information Technology",
      "Vice President for Budget and Planning",
      "Vice President for Information Technology",
      "Chief Information Technology Officer",
    ],
    policyStatement: "All institutional data is owned by DHD and, as such, all members of the DHD community are responsible for appropriately respecting and protecting the asset. This policy establishes uniform data management standards and identifies the shared responsibilities for assuring the integrity of the data and that it efficiently and effectively serves the needs of the DHD.",
    guidingPrinciples: [
      "Procedures must be in place to guide appropriate data access, ensure data security, and address exceptions.",
      "Roles are necessary to support data integrity and security.",
      "Sharing information across organizational boundaries should be facilitated where appropriate.",
      "A sustained data administration function should be established to oversee data governance, including the development and maintenance of data standards and policies.",
      "Data must be classified according to its sensitivity and criticality to ensure appropriate protection measures are applied.",
      "Regular training and awareness programs should be conducted to educate employees on data management responsibilities."
    ],
    responsibilities: [
      {
        role: "Data Stewards",
        description: "Responsible for defining data access rules, ensuring data quality, and resolving data-related issues within their domain."
      },
      {
        role: "Data Custodians",
        description: "Manage the technical environment where data is stored, ensuring secure storage, backup, and recovery processes."
      },
      {
        role: "DHD Community Members",
        description: "All employees and affiliates must comply with data management policies and protect data in their care."
      }
    ],
    compliance: [
      "Non-compliance with this policy may result in disciplinary action, up to and including termination.",
      "DHD will conduct periodic audits to ensure adherence to data management standards.",
      "Violations of data security must be reported immediately to the Chief Information Technology Officer."
    ]
  },
  responsibleUsePolicy: {
    id: "responsible-use",
    title: "DHD Responsible Use Policy",
    effectiveDate: "Effective upon approval by DHD Senior Team",
    issuingAuthorities: [
      "Executive Vice President for Finance and Information Technology",
      "Vice President for Information Technology",
      "Chief Information Technology Officer",
    ],
    policyStatement: "The Responsible Use Policy ensures that all computer, network, and data resources are used in a manner that supports DHD’s mission, complies with applicable laws, and respects the rights of others. This policy applies to all users of DHD’s IT resources, including employees, contractors, and affiliates.",
    guidingPrinciples: [
      "Users must access and use IT resources only for authorized purposes related to DHD’s business and operations.",
      "Users are responsible for safeguarding their credentials and preventing unauthorized access to DHD systems.",
      "Respect for intellectual property, privacy, and confidentiality must be maintained at all times.",
      "Prohibited activities include unauthorized access, distribution of malicious software, and use of resources for personal gain or illegal activities.",
      "Users must report any suspected security incidents or policy violations promptly."
    ],
    acceptableUse: [
      "Use of IT resources for DHD-related work, research, and communication.",
      "Limited personal use, provided it does not interfere with work responsibilities or violate policies."
    ],
    prohibitedUse: [
      "Sharing or disclosing confidential data without authorization.",
      "Engaging in activities that disrupt or compromise the security of DHD’s IT systems.",
      "Using DHD resources for commercial activities unrelated to the company’s mission."
    ],
    compliance: [
      "Violations of this policy may result in loss of access to IT resources, disciplinary action, or legal consequences.",
      "DHD reserves the right to monitor and audit IT resource usage to ensure compliance.",
      "Users must complete mandatory training on responsible use of IT resources."
    ]
  }
};