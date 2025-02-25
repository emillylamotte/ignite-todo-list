// src/declarations.d.ts ou src/types/declarations.d.ts
declare module "*.svg" {
    import { FunctionComponent, SVGProps } from "react";
    const content: FunctionComponent<SVGProps<SVGSVGElement>>;
    export default content;
  }
  