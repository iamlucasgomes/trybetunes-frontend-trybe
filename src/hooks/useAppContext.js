import { useContext } from 'react';
import Context from '../context/Context';

const useAppContext = () => {
  const context = useContext(Context);

  return context;
};

export default useAppContext;
