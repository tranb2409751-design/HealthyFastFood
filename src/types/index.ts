export interface BusinessModel {
  id: 'mekong-bowl' | 'wrap-and-run' | 'bep-lanh';
  name: string;
  tagline: string;
  format: string;
  painPointSolved: string;
  targetSlot: string;
  brandConcept: {
    name: string;
    description: string;
    primaryColors: { name: string; hex: string; desc: string }[];
    packaging: string;
    packagingDetails: string[];
    coreValues: string[];
  };
  image: string;
  keyProducts: {
    name: string;
    calories: number;
    price: number;
    cogs: number;
    description: string;
    ingredients: string[];
    localFlavor: string;
    tags: string[];
  }[];
  unitEconomics: {
    retailPriceRange: string;
    avgPrice: number;
    cogsPercentage: number;
    cogsCost: number;
    grossMarginPercentage: number;
    dailyVolumeEst: number;
    monthlyRevenueEst: number;
    monthlyGrossProfitEst: number;
    breakevenDays: number;
    capitalNeeded: string;
  };
  operationalHighlights: string[];
  keyMessages: {
    angle: string;
    slogan: string;
    sampleCopy: string;
    channel: string;
  }[];
}

export interface EmpathyPoint {
  category: 'Think & Feel' | 'Hear' | 'See' | 'Say & Do';
  title: string;
  items: string[];
  quote: string;
}

export interface DailyScheduleSlot {
  time: string;
  title: string;
  context: string;
  painPoint: string;
  opportunity: string;
  intensity: 'low' | 'medium' | 'high' | 'critical';
}

export interface OfficeBuilding {
  name: string;
  address: string;
  tier: string;
  estimatedWorkers: number;
  companies: string[];
  suitableModels: string[];
  distanceToHub: string;
}
