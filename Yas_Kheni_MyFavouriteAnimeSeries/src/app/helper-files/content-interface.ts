export interface Content {
  id: number | null; // Make id property nullable
  title: string;
  description: string;
  creator: string;
  imgURL?: string;
  type?: string;
  tags?: string[];
  highlight: boolean;
}
