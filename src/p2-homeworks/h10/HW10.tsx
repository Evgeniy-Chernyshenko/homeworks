import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootStoreType } from './bll/store';
import { loadingAC } from './bll/loadingReducer';
import spinnerImg from './assets/img/spinner.png';

function HW10() {
  const isLoading = useSelector<RootStoreType, boolean>(
    (state) => state.loading.isLoading
  );

  const dispatch = useDispatch();

  const setLoading = () => {
    dispatch(loadingAC(true));

    setTimeout(() => {
      dispatch(loadingAC(false));
    }, 1500);
  };

  return (
    <div>
      <hr />
      homeworks 10
      {/*should work (должно работать)*/}
      {isLoading ? (
        <div>
          <img src={spinnerImg} alt="Spinner" />
        </div>
      ) : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
}

const HW10WithRedux = () => <HW10 />;

export default HW10WithRedux;
