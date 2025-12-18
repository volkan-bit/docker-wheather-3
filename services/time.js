export async function getTime(timezone) {
const res = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
return await res.json();
}
