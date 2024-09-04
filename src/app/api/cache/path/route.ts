import { env } from "app/config/env";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();
  const { path, token } = body;

  if (!path || !token) {
    return Response.json({ error: "Missing path or token" }, { status: 400 });
  }

  if (token !== env.CACHE_TOKEN) {
    return Response.json({ error: "Invalid token" }, { status: 401 });
  }
  revalidatePath(path);
  return Response.json({ success: true });
}

// en postman se envia un post a la url de la api con el siguiente body: http://localhost:3000/api/cache/path
// {
//   "path": "/",
//     "token": "123456" // token guardado en el .env
// }

// y se obtiene la respuesta:
// {
//   "success": true
// }
