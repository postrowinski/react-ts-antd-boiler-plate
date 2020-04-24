import { useState } from 'react';

export interface UseModal {
    visible: boolean;
    setVisible: (value: boolean) => void;
    show: () => void;
    hide: () => void;
}

export function useModal(): UseModal {
    const [visible, setVisible] = useState<boolean>(false);

    function show(): void {
        setVisible(true);
    }

    function hide(): void {
        setVisible(false);
    }

    return {
        visible,
        setVisible,
        show,
        hide
    }
}