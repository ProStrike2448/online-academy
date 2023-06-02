import { PrismaClient, type Courses } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const take = searchParams.get("take");
  const cursor = searchParams.get("cursor");

  if (take) {
    return NextResponse.json({ courses: await getCourses(+take, cursor) });
  }
}

const getCourses = async (take: number, cursor: Courses["id"] | null) => {
  const prisma = new PrismaClient();

  const courses = await prisma.courses.findMany({
    take: take,
    ...(cursor && {
      skip: 1,
      cursor: { id: cursor },
    }),
    orderBy: {
      id: "asc",
    },
  });

  return courses;
};
