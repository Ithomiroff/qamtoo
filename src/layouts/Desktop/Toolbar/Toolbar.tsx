'use client'

import Image from 'next/image';
import Link from 'next/link'

import * as styled from './styled';
import { Button } from "@/kit/components/Button";
import { Container } from "@/kit/components/Container";
import { SearchField } from "@/layouts/Desktop/SearchField";
import { CitySelection } from "@/layouts/Desktop/CitySelection";
import { ActionsToolbar } from "@/layouts/Desktop/ActionsToolbar/ActionsToolbar";
import { useAppDispatch } from "@/store";
import { useCallback } from "react";
import * as eventsSlice from '@/store/events';


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
              icon="filters"
              onClick={toggleFilters}
            />

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