export const sampleRFPCases = [
  {
    customer: {
      customerName: 'John Doe',
      customerEmail: 'john.doe@example.com',
      companyName: 'ABC Corp',
    },
    event: {
      eventType: 'conference',
      startDate: '2024-06-01',
      endDate: '2024-06-03',
      guestCount: 100,
      roomsNeeded: 10,
    },
    preferences: {
      meetingSpaces: true,
      catering: true,
      tone: 'professional',
      additionalBrief:
        "From our meeting today: ABC Corp needs to host their annual sales conference. They're expecting 150 attendees from June 15-17. They'll need a main ballroom for presentations, 3 breakout rooms, full catering for breakfast and lunch, and accommodation for about 120 guests. The CEO mentioned they want to impress their top performers, so premium options would be good.",
    },
  },
  {
    customer: {
      customerName: 'Jane Doe',
      customerEmail: 'jane.doe@example.com',
      companyName: 'XYZ Inc.',
    },
    event: {
      eventType: 'wedding',
      startDate: '2024-06-01',
      endDate: '2024-06-03',
      guestCount: 100,
      roomsNeeded: 10,
    },
    preferences: {
      meetingSpaces: false,
      catering: false,
      tone: 'professional',
      additionalBrief:
        "Hi, I'm organizing a wedding reception for September 2024. We're expecting around 200 guests. We need the grand ballroom, full dinner service, bar service until midnight, and a block of 50 rooms for out-of-town guests. The bride loves flowers, so extra floral arrangements would be wonderful. We're looking for a hotel that can accommodate our needs and provide a seamless experience for our guests.",
    },
  },
  {
    customer: {
      customerName: 'Jim Doe',
      customerEmail: 'jim.doe@example.com',
      companyName: 'DEF Inc.',
    },
    event: {
      eventType: 'conference',
      startDate: '2024-06-01',
      endDate: '2024-06-03',
      guestCount: 100,
      roomsNeeded: 10,
    },
    preferences: {
      meetingSpaces: true,
      catering: true,
      tone: 'professional',
      additionalBrief:
        "From our meeting today: ABC Corp needs to host their annual sales conference. They're expecting 150 attendees from June 15-17. They'll need a main ballroom for presentations, 3 breakout rooms, full catering for breakfast and lunch, and accommodation for about 120 guests. The CEO mentioned they want to impress their top performers, so premium options would be good.",
    },
  },
];

export const sampleProposalPayloads = [
  {
    company_id: 5029,
    language: 'en',
    contact_email: 'jian@stocked.se',
    background_image: {
      id: 301,
      uuid: 'f470fb28-cd35-4a98-9fbf-3855b2961e13',
    },
    background_video: {},
    title_md: 'ACME Sales Kick-Off 2025 – Proposal from Grand Riverside Hotel',
    description_md:
      '# Welcome ACME\n<Thank you for considering Grand Riverside Hotel for your 2-day sales kick-off. Below you will find our proposed package including meeting facilities, accommodation, and dinners.>',
    recipient: {
      first_name: 'Lisa',
      last_name: 'Martin',
      email: 'lisa.martin@acmecorp.com',
      phone: '+44 20 1234 5678',
      company_name: 'ACME Corporation',
    },
    data: {
      event_name: 'ACME Sales Kick-Off 2025',
      event_type: 'corporate_meeting',
      start_date: '2025-03-10',
      end_date: '2025-03-12',
      nights: 2,
      participants: 30,
      timezone: 'Europe/Stockholm',
      rfp_id: 123,
      lead_source: 'website_form',
      internal_owner_email: 'anna.sales@grandriverside.example.com',
    },
    invoicing_enabled: true,
    blocks: [
      {
        content_id: 164856,
      },
    ],
    attachments: [
      {
        mime_type: 'application/pdf',
        name: 'Meeting Room Floorplan',
        url: 'https://assets.example.com/floorplans/riverside-ballroom.pdf',
      },
      {
        mime_type: 'application/pdf',
        name: 'AV Price List 2025',
        url: 'https://assets.example.com/av/av-pricelist-2025.pdf',
      },
    ],
  },
];
