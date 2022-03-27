import { useDispatch, useSelector } from 'react-redux';
import { RootStoreType } from '../h10/bll/store';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import { themeAC, ThemeStateType, ThemeType } from './bll/themeReducer';
import s from './HW12.module.css';

const themes = ['dark', 'red', 'some'];

function HW12() {
  const { theme } = useSelector<RootStoreType, ThemeStateType>(
    (state) => state.theme
  );
  const dispatch = useDispatch();

  const onChangeOptionHandler = (option: ThemeType) => {
    dispatch(themeAC.changeTheme(option));
  };

  return (
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + '-text']}>homeworks 12</span>

      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}

      <SuperRadio
        value={theme}
        options={themes}
        onChangeOption={onChangeOptionHandler}
      />

      <hr />
    </div>
  );
}

export default HW12;
