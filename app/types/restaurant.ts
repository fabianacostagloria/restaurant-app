export interface MarketPlaceUnit {
  _id: string;
  name: string;
}

export interface AddressInfo {
  address: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
}

export interface Contacts {
  phoneNumber: string;
  email: string;
  cellphoneNumber: string;
}

export interface Location {
  coordinates: [number, number];
  type: string;
}

export interface User {
  _id: string;
  email: string;
  name: string;
}

export interface Image {
  file: string;
  url: string;
}

export interface Activity {
  creation: {
    user: User;
  };
  lastUpdate: {
    user: User;
    datetime: string;
  };
  _id: string;
}

export interface PaymentInfo {
  inRestaurant: {
    cards: {
      method: string[];
      authorizers: string[];
    };
    accepted: string[];
  };
}

export interface Services {
  couponCodeOffers: {
    enabled: boolean;
    trigger: string[];
    orderTriggerValue: number;
  };
  loyalty: {
    enabled: boolean;
  };
  events: {
    enabled: boolean;
    showOnAppHome: boolean;
  };
}

export interface CouponCustom {
  content: Array<{
    contentType: string;
    show: boolean;
    value?: string;
  }>;
}

export interface CurrencyInfo {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
}

export interface Cuisine {
  _id: string;
  name: {
    en: string;
    "pt-PT": string;
    "pt-BR": string;
  };
  tag: string;
}

export interface Docs {
  marketPlaceUnit: MarketPlaceUnit;
  subscriptions: {
    wefood: boolean;
  };
  addressInfo: AddressInfo;
  contacts: Contacts;
  location: Location;
  image: Image;
  _id: string;
  enabled: boolean;
  name: string;
  company: string;
  type: string;
  cuisines: Cuisine[];
  additionalInfo: any[];
  paymentsInfo: PaymentInfo;
  timezone: string;
  languageCode: string;
  currencyCode: string;
  hideContact: boolean;
  isTest: boolean;
  activity: Activity;
  createdAt: string;
  updatedAt: string;
  services: Services;
  couponCustom: CouponCustom;
  languageInfo: string;
  currencyInfo: CurrencyInfo;
  countryCode: string;
  __v: number;
} 

export interface ApiResponse {
  docs: Docs[];
  totalDocs: number;
  offset: number;
  limit: number;
}