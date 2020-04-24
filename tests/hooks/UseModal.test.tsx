import { renderHook, act } from '@testing-library/react-hooks'
import { useModal, UseModal } from '../../src/hooks/useModal';

describe('check useModal hook', (): void => {

    it('is initial not visible', (): void => {
        const { result } = renderHook((): UseModal => useModal());
        expect(result.current.visible).toEqual(false);
    });

    it('should change boolean state', (): void => {
        const { result } = renderHook((): UseModal => useModal());
        act((): void => {
            result.current.setVisible(true);
        })
        expect(result.current.visible).toEqual(true);
    });

    it('show should change state to true', (): void => {
        const { result } = renderHook((): UseModal => useModal());
        act((): void => {
            result.current.show();
        });
        expect(result.current.visible).toEqual(true);
    });

    it('hide should change state to false from true', (): void => {
        const { result } = renderHook((): UseModal => useModal());
        act((): void => {
            result.current.setVisible(true);
        });
        act((): void => {
            result.current.hide();
        });
        expect(result.current.visible).toEqual(false);
    });
});