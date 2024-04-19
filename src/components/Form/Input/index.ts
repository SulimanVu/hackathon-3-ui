/**
 * TODO: Пока такие экспорты, т.к. api `Input` пока хватает, если нужно добавить обертку
 */
import { Input } from 'antd';

export { InputProps } from 'antd';

const { Password: InputPassword } = Input;

export type InputPasswordProps = React.ComponentProps<typeof InputPassword>;

export { Input, InputPassword };
