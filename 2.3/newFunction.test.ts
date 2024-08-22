//!Here we are importing our function called myFunciton from our newFunction.ts file so we can use it in our test.
import { myFunction } from "./newFunction";

describe("myFunction", () => {
  it("returns the word 'true' if I pass the function the number 5", () => {
    expect(myFunction(5)).toBe("true");
  });
  it("returns the word 'false' if I pass in a number less than 5", () => {
    expect(myFunction(1)).toBe("false");
  });
  it("returns the word 'big' if I pass in a numbewr greater than 5", () => {
    expect(myFunction(100)).toBe("big");
  });
  it("returns the word 'negative' if a negative number is passed in", () => {
    expect(myFunction(-1)).toBe("negative");
  });
});


import { blockBuster } from "./newFunction";

describe('Testing Block Buster', () => {
  it('should return the movie set for MovieOne', () => {
    expect(blockBuster("Movie One")).toBe("Big Trouble In Little China"); 
  }); 
  it("should return the movie set for movie two", () => {
    expect(blockBuster('Movie Two')).toBe("Scream"); 
  }); 
  it("should return the movie set for movie three", () => {
    expect(blockBuster('Movie Three')).toBe("Lost and Found"); 
  }); 
  it("should return the movie set for movie four", () => {
    expect(blockBuster("Movie Four")).toBe("The Truth About Cats and Dogs"); 
  });
  it("should return the movie set for movie five", () => {
    expect(blockBuster("Movie Five")).toBe("Abigail"); 
  }); 
  it("should return the default", () => {
    expect(blockBuster("Fast X")).toBe("I'm sorry we do not carry Fast X"); 
  });
}); 