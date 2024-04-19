import type { ThemeConfig } from 'antd/lib/config-provider/context';
import type { OverrideToken } from 'antd/lib/theme/interface';

type AntdComponentsThemeConfig = Required<ThemeConfig>['components'];
type AntdComponentName = keyof OverrideToken;

export type AntdComponentConfig<ComponentName extends AntdComponentName> = AntdComponentsThemeConfig[ComponentName];
