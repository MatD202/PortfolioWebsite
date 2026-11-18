type Certificate = {
  title: string;
} & (
  | { credlyBadgeId: string; imageUrl: string }
  | { imageUrl: string; credentialUrl: string; platform: string }
);

// Add a Credly badge by its share ID and image URL, or supply an image and a public credential URL.
export const certificates: Certificate[] = [
  {
    title: 'Apache Kafka',
    imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/200705871',
    credentialUrl: 'https://certificates.confluent.io/9a504293-6166-476a-a3e4-1bf3eb163ae3',
    platform: 'Confluent',
  },
  {
    title: 'MongoDB Overview',
    credlyBadgeId: 'b52c86d6-97b0-49fb-afa8-d6a0895a2261',
    imageUrl: 'https://images.credly.com/images/0b4c54ef-b1d8-4aa7-a658-230b74dec7f6/linkedin_thumb_blob',
  },
  {
    title: 'MongoDB CRUD',
    credlyBadgeId: '46e3d037-9679-4a94-a207-528c41b27fd4',
    imageUrl: 'https://images.credly.com/images/d8f7a9d6-dad9-40cc-b389-a343d2d72a9e/linkedin_thumb_blob',
  },
  {
    title: 'From Relational Model (SQL) to MongoDB’s Document Model',
    credlyBadgeId: 'a35fa58e-5d0e-493d-b784-4cd24a6a98cb',
    imageUrl: 'https://images.credly.com/images/234edfc5-0177-46e7-a61a-071f060af2f6/linkedin_thumb_blob',
  },
];
