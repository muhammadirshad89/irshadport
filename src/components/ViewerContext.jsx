import { createContext, lazy, Suspense, useCallback, useContext, useState } from 'react';

const Viewer = lazy(() => import('./Viewer.jsx'));
const Ctx = createContext(() => {});
export const useViewer = () => useContext(Ctx);

export function ViewerProvider({ children }) {
  const [state, setState] = useState(null);
  const open = useCallback((list, index) => setState({ list, index }), []);
  return (
    <Ctx.Provider value={open}>
      {children}
      {state && (
        <Suspense fallback={null}>
          <Viewer list={state.list} index={state.index} onIndex={(i) => setState((s) => ({ ...s, index: i }))} onClose={() => setState(null)} />
        </Suspense>
      )}
    </Ctx.Provider>
  );
}
