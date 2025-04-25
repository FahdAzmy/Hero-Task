// types.ts
export interface ContentVariations {
  headlines: string[];
  subheadlines: string[];
  images: string[];
}

export interface EditableTextProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  value: string;
  onChange: (value: string) => void;
  className?: string;
}
