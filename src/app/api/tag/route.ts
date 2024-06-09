import { NextResponse } from "next/server";
import api from "@/api";

export async function GET(
) {
  try {
    const res = await api.get<unknown>('/tag');
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }

}