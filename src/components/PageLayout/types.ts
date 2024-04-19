import { HeaderProps } from '@/components';
import { EducationDeclaration, ServiceDeclaration } from '@/types';

export const defaultServices: ServiceDeclaration[] = [
  {
    name: 'analytics',
    title: 'Аналитика',
    description: 'Аналитические дашборды основных бизнес-показателей',
    iconName: 'RadarChart',
  },
  {
    name: 'intranet',
    title: 'Корпоративный портал',
    description: 'Платформа информирования сотрудников о жизни компании',
    iconName: 'CoffeeCup',
  },
  {
    name: 'time',
    title: 'Time',
    description: 'Планирование рабочего времени и контроля задач',
    iconName: 'DiscoveryCompass',
  },
];

export const defaultEducations: EducationDeclaration[] = [
  {
    title: 'Начало работы с системой',
    description:
      'Платформа управления девелоперским циклом Платформа управления девелоперским циклом',
    partTitle: 'Часть 1',
  },
  {
    title: 'Знакомство',
    description:
      'Платформа управления девелоперским циклом Платформа управления девелоперским циклом',
    partTitle: 'Часть 2',
  },
];

export const defaultHeaderProps: Partial<HeaderProps> = {
  services: defaultServices,
  educations: defaultEducations,
};
