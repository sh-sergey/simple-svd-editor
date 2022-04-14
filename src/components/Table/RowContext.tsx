import { FC, useState, createContext, Dispatch, SetStateAction, ReactNode, useContext } from 'react';

/** We need to use context to allow control tooltip state from settings column */
export interface RowContextProps {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

const RowContext = createContext<RowContextProps | null>(null);
RowContext.displayName = 'RowContext';

export const RowProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return <RowContext.Provider value={{ visible, setVisible }}>{children}</RowContext.Provider>;
};

export const useRow = () => {
    const context = useContext(RowContext);

    if (!context) {
        throw new Error(`Hook useRow must be used within RowProvider`);
    }

    return context;
};
