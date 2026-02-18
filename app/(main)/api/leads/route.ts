import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, email, phone } = await req.json();

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  const created = await prisma.lead.create({
    data: { name, email, phone },
  });

  console.log("CREATED:", created);

  return NextResponse.json(created, { status: 201 });
}