import { MaybeProps } from "./types";

export const Maybe = ({ when, children, fallback }: MaybeProps) => when ? <>{children}</> : <>{fallback}</>

