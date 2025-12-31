import { get } from "@vercel/edge-config";
import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const url = await get<string>(slug);

  if (!url) {
    return new Response("Not found", { status: 404 });
  }

  redirect(url);
}
