import { useState, useEffect } from 'react';
import companyConfig from '../data/companyConfig.json';

interface CompanyConfig {
  company: {
    shortName: string;
    fullName: string;
    address: string;
    cnpj: string;
    phone: string;
    email: string;
    website: string;
    businessType: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
  };
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  about: {
    title: string;
    mission: string;
    vision: string;
  };
  testimonials: Array<{
    text: string;
    author: string;
    rating: number;
  }>;
}

export const useCompanyConfig = (): CompanyConfig => {
  const [config, setConfig] = useState<CompanyConfig>(companyConfig);

  useEffect(() => {
    // Replace placeholders with actual company data
    const processedConfig = JSON.parse(
      JSON.stringify(companyConfig)
        .replace(/{companyName}/g, companyConfig.company.fullName)
        .replace(/{companyShortName}/g, companyConfig.company.shortName)
    );
    setConfig(processedConfig);
  }, []);

  return config;
};