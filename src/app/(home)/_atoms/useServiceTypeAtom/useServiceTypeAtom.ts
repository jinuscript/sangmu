import { useAtom } from 'jotai';
import { serviceTypeAtom } from './serviceTypeAtom';

export default function useServiceTypeAtom() {
  return useAtom(serviceTypeAtom);
}
