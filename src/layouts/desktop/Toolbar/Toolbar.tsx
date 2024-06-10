'use client'

import Image from 'next/image';
import Link from 'next/link'

import * as styled from './styled';
import { Button } from "@/kit/components/Button";
import { Container } from "@/kit/components/Container";
import { SearchField } from "@/layouts/desktop/SearchField";
import { CitySelection } from "@/layouts/desktop/CitySelection";
import { ActionsToolbar } from "@/layouts/desktop/ActionsToolbar/ActionsToolbar";
import { useAppDispatch } from "@/store";
import * as eventsSlice from '@/store/events';
import { Icon } from "@/kit/components/Icon";
import FiltersIcon from "@/assets/icons/filters.svg";


const Toolbar = () => {

  const dispatch = useAppDispatch();

  const toggleFilters = () => {
    dispatch(eventsSlice.toggleExtendedFilters());
  };

  return (
    <styled.Header>
      <Container>
        <styled.HeaderInner>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              height={40}
              width={171}
              alt="QAMTOO мероприятия"
            />
          </Link>

          <styled.InputWrapper>
            <Button
              variant="rounded"
              onClick={toggleFilters}
            >
              <Icon size="lg">
                <FiltersIcon/>
              </Icon>
            </Button>

            <SearchField/>
          </styled.InputWrapper>

          <CitySelection/>

          <ActionsToolbar
            authed={false}
          />
        </styled.HeaderInner>
      </Container>
    </styled.Header>
  );
};

export {
  Toolbar
};