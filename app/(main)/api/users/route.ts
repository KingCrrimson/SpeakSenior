import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("BODY:", body);

    const { name, email, phone } = body;

    const lead = await prisma.lead.create({
      data: { name, email, phone },
    });

    console.log("CREATED:", lead);

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}