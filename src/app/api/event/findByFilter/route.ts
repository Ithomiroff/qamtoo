import { NextResponse } from "next/server";
import api from "@/api";
import { _EventServerDto, SearchFilterDto } from "@/api/search";

export async function POST(
  request: Request
) {
  const body = await request.json();
  try {
    const res = await api.post<SearchFilterDto, _EventServerDto[]>('/event/findByFilter', body);
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }

}