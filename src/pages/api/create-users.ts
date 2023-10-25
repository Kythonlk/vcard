import type { APIRoute } from 'astro';
import { XataClient } from '../../xata';

const client = new XataClient({
    apiKey: import.meta.env.XATA_API_KEY,
    branch: import.meta.env.XATA_BRANCH,
});

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



