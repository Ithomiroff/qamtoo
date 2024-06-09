import { NextResponse } from "next/server";
import api from "@/api";
import { CategoryDto } from "../../../api/static";

export async function GET(
) {
  try {
    const res = await api.get<CategoryDto[]>('/category');
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }

}