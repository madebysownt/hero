import { ReactElement } from "react";

const SidebarLabel = ({children}: {children: ReactElement | string}) => {
    return (
        <span className="truncate">{children}</span>
    );
}

export default SidebarLabel;