import AuctionCard from "./AuctionCard";


async function getData() {
    const res = await fetch("http://localhost:6001/search?pageSize=10")
    if (!res.ok)
    {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  
  }



async function Listings() {
    const data = await getData();

  return (
    <div className="grid grid-cols-4 gap-6">
        {
            data && data.results.map((result:any) => (<AuctionCard key={result.id} auction={result} />))
        }
    </div>
  )
}


export default Listings