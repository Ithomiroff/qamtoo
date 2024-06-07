import { headers } from "next/headers";
import { Device } from "@/common/types";


export const useDevice = (): Device => {
  const headersList = headers();

  const UA = headersList.get('user-agent');

  const isMobile = Boolean(UA?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ));

  return isMobile ? 'mobile' : 'desktop' as Device;
};
