import { ReactNode } from "react";

export default function Badge({children, color="zinc"} : {children: ReactNode; color: "zinc" | "lime" | "purple" | "rose"}) {
    return (
        <span className={`max-sm:hidden inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-${color}-400/20 text-${color}-700 group-data-[hover]:bg-${color}-400/30 dark:bg-${color}-400/10 dark:text-${color}-300 dark:group-data-[hover]:bg-${color}-400/15`}>
            {children}
        </span>
    );
}