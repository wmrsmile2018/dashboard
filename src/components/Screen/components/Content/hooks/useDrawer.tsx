import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { Parent } from '../../../../../common/types/parent';

const DrawerContext = createContext<{
  setDrawerContent: Dispatch<SetStateAction<ReactNode>>;
  drawerVisible: boolean;
  closeDrawer: VoidFunction;
  openDrawer: VoidFunction;
  node: ReactNode;
}>({
  setDrawerContent: () => {},
  drawerVisible: false,
  closeDrawer: () => {},
  openDrawer: () => {},
  node: undefined,
});

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const useSetDrawer = () => {
  const [node, setNode] = useState<ReactNode>();
  const [visible, setVisible] = useState(false);

  const closeDrawer = useCallback(() => {
    setVisible(false);
  }, []);

  const openDrawer = useCallback(() => {
    setVisible(true);
  }, []);

  return { node, setNode, closeDrawer, visible, openDrawer };
};

export const DrawerProvider: FC<Parent> = ({ children }) => {
  const { closeDrawer, openDrawer, setNode, visible, node } = useSetDrawer();

  return (
    <DrawerContext.Provider
      value={{
        setDrawerContent: setNode,
        closeDrawer,
        openDrawer,
        drawerVisible: visible,
        node,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
