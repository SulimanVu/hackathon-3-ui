declare module '*.woff';
declare module '*.woff2';

declare module '*.svg' {
  const ReactComponent: any;
  const url: string;
  export default url;
  export { ReactComponent };
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
