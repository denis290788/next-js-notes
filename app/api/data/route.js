// export async function GET(request) {
//     try {
//         const data = {
//             name: 'John Doe',
//             age: 30,
//             bio: 'I am a developer',
//         };

//         return new Response(JSON.stringify(data));
//     } catch (error) {
//         console.error(error);
//         return new Response('Internal Server Error', { status: 500 });
//     }
// }

// export async function POST(request) {
//     try {
//         return new Response(request.body);
//     } catch (error) {
//         console.error(error);
//         return new Response('Internal Server Error', { status: 500 });
//     }
// }
