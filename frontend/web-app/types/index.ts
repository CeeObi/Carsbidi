type PagedResult<T>={
    results: T[],
    pageCount: number,
    totalCount: number
}

type Auction = {
    reservePrice: number
    seller: string
    winner?: string
    soldAmount: number
    currentHighBid: number
    createdAt: string
    updatedAt: string
    auctionEnd: string
    status: string
    make: string
    model: string
    color: string
    year: number
    mileage: number
    imageUrl: string
    id: string
  } 

export type {PagedResult, Auction}