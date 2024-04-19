import { IconName } from '@/components';

export type ServiceName = 'd360' | 'intranet' | 'time' | 'analytics';

export interface ServiceDeclaration {
  name: ServiceName;
  title: string;
  description: string;
  iconName: IconName;
  onClick?: () => void;
  render?: (service: ServiceName) => React.ReactNode;
}

export interface EducationDeclaration {
  partTitle: string;
  title: string;
  description: string;
  onClick?: () => void;
}
