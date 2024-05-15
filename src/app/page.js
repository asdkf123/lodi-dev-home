import {executeQuery} from "./api/db";
export default async function Home() {
  let data = await executeQuery('SELECT * FROM visitors', []);
  let queryData = JSON.parse(JSON.stringify(data));
  return (
    <div>
      <h1>Home</h1>
      <div>visitors total: {queryData[0].visitors_total}</div>
      <div>visitors today: {queryData[0].visitors_today}</div>
    </div>
  );
}