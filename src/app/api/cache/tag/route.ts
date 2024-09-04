import { env } from "app/config/env";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();
  const { tag, token } = body;

  if (!tag || !token) {
    return Response.json({ error: "Missing tag or token" }, { status: 400 });
  }

  if (token !== env.CACHE_TOKEN) {
    return Response.json({ error: "Invalid token" }, { status: 401 });
  }
  revalidateTag(tag);
  return Response.json({ success: true });
}

// en postman se envia un post a la url de la api con el siguiente body: http://localhost:3000/api/cache/tag
// {
//   "tag": "products",
//     "token": "123456" // token guardado en el .env
// }

// y se obtiene la respuesta:
// {
//   "success": true
// }
