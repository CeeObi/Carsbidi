using AuctionService.Data;
using AuctionService.DTOs;
using AuctionService.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AuctionService.Controllers;

[ApiController]
[Route("api/auctions")]
public class AuctionsController : ControllerBase
{
    private readonly AuctionDbContext _context;
    private readonly IMapper _mapper;
    public AuctionsController(AuctionDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<List<AuctionDto>>>GetAllAuctions()
    {
        var auction_list = await _context.Auctions
            .Include(x => x.Item)
            .OrderBy(X => X.Item.Make)
            .ToListAsync();

        return _mapper.Map<List<AuctionDto>>(auction_list);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<AuctionDto>>GetAuctionById(Guid id)
    {
        var auction = await _context.Auctions
            .Include(x => x.Item)
            .FirstOrDefaultAsync(X => X.Id == id);
        if (auction == null) return NotFound();

        return _mapper.Map<AuctionDto>(auction);
    }

    [HttpPost]
    public async Task<ActionResult<AuctionDto>> CreateAuction(CreateAuctionDto newAuctionDto) 
    {
        var new_auction = _mapper.Map<Auction>(newAuctionDto);
        //TODO: Add current user as seller
        new_auction.Seller="test";
        _context.Auctions.Add(new_auction);

        var result =  await _context.SaveChangesAsync() > 0;

        if(!result) {return BadRequest("Could not save changes to the Db");}        
        
        return CreatedAtAction(nameof(GetAuctionById), new {new_auction.Id}, _mapper.Map<AuctionDto>(new_auction));
    }

    [HttpPut("{id}")]    
    public async Task<ActionResult> UpdateAuction(UpdateAuctionDto updateAuction, Guid id)
    {
        var auction = await _context.Auctions
            .Include(x => x.Item)
            .FirstOrDefaultAsync(X => X.Id == id);
        if (auction == null) return NotFound();

        //TODO: check to ensure the seller == username

        auction.Item.Make = updateAuction.Make ?? auction.Item.Make;
        auction.Item.Model = updateAuction.Model ?? auction.Item.Model;
        auction.Item.Color = updateAuction.Color ?? auction.Item.Color;
        auction.Item.Mileage = updateAuction.Mileage ?? auction.Item.Mileage;
        auction.Item.Year = updateAuction.Year ?? auction.Item.Year;

        var result =  await _context.SaveChangesAsync() > 0;

        if(!result) {return BadRequest("Problem updating changes");} 

        return Ok();   
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteAuction(Guid id)
    {
        var auction = await _context.Auctions.FindAsync(id);
        if (auction == null) return NotFound();
        
        //TODO: check to ensure the seller == username

        _context.Auctions.Remove(auction);

        var result =  await _context.SaveChangesAsync() > 0;

        if(!result) {return BadRequest("Problem deleting auction. Please try again!");} 
        
        return Ok();    
    }
}
