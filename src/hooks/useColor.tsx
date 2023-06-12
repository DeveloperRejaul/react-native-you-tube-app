import {useColorModeValue} from 'native-base';

export default function useColor() {
  const colorMode = useColorModeValue('Light', 'Dark');
  const isDark = colorMode === 'Dark';
  return {isDark};
}
