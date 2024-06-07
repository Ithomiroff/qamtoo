'use server'

import { getEvents } from "@/api/search";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

const preloadData = {
  events: getEvents,
};

const preloader = (key: keyof typeof preloadData) => preloadData[key]();

export const usePreloadData = () => {
  const headersList = headers();

  const domain = headersList.get('host') || "";
  const headerUrl = headersList.get('referer') || "";

};

export default preloader;