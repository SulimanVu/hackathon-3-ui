import React from 'react';

import { Typography } from 'antd';

import { SubmenuService } from './SubmenuService';

import { Text } from '@/components';
import { classNames } from '@/helpers';
import { EducationDeclaration, ServiceDeclaration, ServiceName } from '@/types';

import styles from './Submenu.module.scss';

const { Link } = Typography;

export interface SubmenuProps {
  activeService: ServiceName;
  services: ServiceDeclaration[];
  educations: EducationDeclaration[];
  onServiceClick?: (serviceName: ServiceName) => void;
  educationsLink?: string;
  isOpened?: boolean;
}

export const Submenu: React.FC<SubmenuProps> = ({
  activeService,
  onServiceClick,
  services,
  educations,
  educationsLink,
  isOpened,
}) => {
  return (
    <div className={classNames(styles.wrapper, { [styles.wrapper_isOpened]: isOpened })}>
      <div className={styles.left}>
        <Text className={styles.title}>Сервисы</Text>
        <div className={styles.services}>
          {services.map((service) => {
            return (
              <SubmenuService
                key={service.name}
                {...service}
                isActive={activeService === service.name}
                onClick={() => {
                  if (service.onClick) service.onClick();
                  if (onServiceClick) onServiceClick(service.name);
                }}
              />
            );
          })}
        </div>
      </div>
      {/** TODO: Нужно будет вернуть, когда нужно будет */}
      {/* <div className={styles.right}>
        <Flex justify="space-between" className={styles.rightHeader}>
          <Text className={styles.title}>Обучение</Text>
          <Link href={educationsLink} className={styles.educationsLink}>
            <Text>Все обучающие видео</Text>
            <Icon as="ArrowRight" size={14} />
          </Link>
        </Flex>
        <Flex
          vertical
          gap={12}
          justify="start"
          align="start"
          flex="1"
          className={styles.educations}
        >
          {educations.map((education, index) => {
            return <EducationItem {...education} key={index} />;
          })}
        </Flex>
      </div> */}
    </div>
  );
};
