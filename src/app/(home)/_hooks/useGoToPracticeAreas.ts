import { useRouter } from "next/navigation";
import { useServiceTypeAtom } from "@/app/(home)/_atoms";

export default function useGoToPracticeAreas() {
  const [service] = useServiceTypeAtom();

  const { push } = useRouter();

  const goToPracticeAreas = () => {
    if (service === "가사") {
      push("/practice-areas/family-law");
      return;
    }

    if (service === "민사") {
      push("/practice-areas/civil-law");
      return;
    }

    if (service === "형사") {
      push("/practice-areas/criminal-law");
      return;
    }
  };

  return goToPracticeAreas;
}
