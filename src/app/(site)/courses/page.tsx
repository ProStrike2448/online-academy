import { type Courses } from "@prisma/client";

// const getCourses = async (
//   take: number,
//   cursor: string | undefined
// ): Promise<Courses[]> => {
//   const res = await fetch(
//     `http://localhost:3000/api/courses?take=${take}` +
//       (cursor ? `&cursor=${cursor}` : "")
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json() as Promise<Courses[]>;
// };

export default function Courses() {
  // const data = await getCourses(1, "1");
  return <pre>Courses</pre>;
}
