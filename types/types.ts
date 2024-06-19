type Product = {
  id: string;
  object: "product";
  active: boolean;
  attributes: string[];
  created: number;
  default_price: string;
  description: string;
  images: string[];
  livemode: boolean;
  marketing_features: string[];
  metadata: Record<string, any>;
  name: string;
  package_dimensions: null | {
    height: number;
    width: number;
    length: number;
    weight: number;
  };
  shippable: boolean | null;
  statement_descriptor: string | null;
  tax_code: string | null;
  type: "service" | "good";
  unit_label: string | null;
  updated: number;
  url: string | null;
};
