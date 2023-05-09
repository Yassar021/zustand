import { useAppStore } from './stores/app-store';
import { shallow } from 'zustand/shallow'

const Count = () => {
    const [count, increase, decrase] = useAppStore((state) => {
        return [state.count, state.increase, state.decrase];
    }, shallow);
    console.log('render count');
    return (
        <div>
            <button type='button' onClick={increase}>+</button>
            <span>Count : {count}</span>
            <button type='button' onClick={decrase}>-</button>
        </div>
    )
}

export default Count