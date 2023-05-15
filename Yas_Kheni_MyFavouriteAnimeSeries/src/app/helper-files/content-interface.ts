export interface Content {
  id: number;
  title: string;
  description: string;
  creator: string;
  type: string;
  tags: string[];
  image?: string; // Add the optional property with a '?' prefix
}
