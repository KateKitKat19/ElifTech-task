import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Bars
      height="120"
      width="120"
      color="#5e88c0"
      ariaLabel="bars-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
