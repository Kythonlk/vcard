import type { APIRoute } from 'astro';
import { XataClient } from '../../../xata';

const client = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });

export const POST: APIRoute = async ({request}) => {
    const user = await request.json();
    const createUser = await client.db.Users.create(user);
    return new Response(JSON.stringify(createUser), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
    });
}

// export const GET: APIRoute = async ({ request }) => {
//     const userData = await client.db.Users.getAll();

//     return new Response(JSON.stringify(userData), {
//         status: 200,
//         headers: {
//             "Content-Type": "application/json"
//         },
//     });
// }





