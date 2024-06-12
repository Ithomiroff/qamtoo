import * as styled from './styled';
import { Typography } from "@/kit/components/Typography";
import MarkerIcon from "@/assets/icons/marker.svg";
import dynamic from "next/dynamic";
import { CitySelectionModal } from "@/layouts/desktop/CitySelectionModal";
import { useState } from "react";
import * as commonStore from '@/store/common';
import { useAppSelector } from "@/store";

const DynamicDesktopModal = dynamic(() => import("../../../kit/components/DesktopModal")
  .then((c) => c.DesktopModal), { ssr:false })

const CitySelection = () => {

  const city = useAppSelector(commonStore.selectedCity);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <styled.Wrapper>
      <styled.Inner onClick={() => setOpen(true)}>
        <styled.Icon>
          <MarkerIcon/>
        </styled.Icon>
        <Typography variant="text">г. {city}</Typography>
      </styled.Inner>

      {open && (
        <DynamicDesktopModal
          title="Выберите город"
          onClose={() => setOpen(false)}
        >
          <CitySelectionModal
            onClose={() => setOpen(false)}
          />
        </DynamicDesktopModal>
      )}
    </styled.Wrapper>
  );
};

export {
  CitySelection
};