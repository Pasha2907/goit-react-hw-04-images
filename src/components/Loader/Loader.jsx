import { InfinitySpin } from 'react-loader-spinner';
import { SpinContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <SpinContainer>
      <InfinitySpin width="200" color="#4fa94d" />
    </SpinContainer>
  );
};
