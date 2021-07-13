import { useMediaQuery } from "@chakra-ui/react"

export const useAdaptive = (mobile: any, tablet: any, desktop: any) => {
  const [isDesktop, isTablet, isMobile] = useMediaQuery(["(min-width: 1440px)","(min-width: 900px)","(min-width: 320px)"])
  console.log(isDesktop, isTablet, isMobile);


  return isDesktop ? desktop : (isTablet ? tablet : mobile)
}
