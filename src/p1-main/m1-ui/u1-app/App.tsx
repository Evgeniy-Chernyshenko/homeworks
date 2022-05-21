import s from './App.module.css';
import HW5 from '../../../p2-homeworks/h5/HW5';
import { useSelector } from 'react-redux';
import { RootStoreType } from '../../../p2-homeworks/h10/bll/store';
import { ThemeStateType } from '../../../p2-homeworks/h12/bll/themeReducer';
import sH12 from '../../../p2-homeworks/h12/HW12.module.css';

function App() {
  const { theme } = useSelector<RootStoreType, ThemeStateType>(
    (state) => state.theme
  );

  return (
    <div className={`${s.App} ${sH12[theme]} ${sH12[theme + '-text']}`}>
      <div>react homeworks:</div>
      <HW5 />
    </div>
  );
}

export default App;
