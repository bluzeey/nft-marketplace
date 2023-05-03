import { ThirdwebSDK } from "@thirdweb-dev/sdk";

export default async function mintNft(req,res) {
  try {
    // De-structure the arguments we passed in out of the request body
    const { authorAddress, nftName , nftDesc , nftImage } = JSON.parse(req.body);

    // You'll need to add your private key in a .env.local file in the root of your project
    // !!!!! NOTE !!!!! NEVER LEAK YOUR PRIVATE KEY to anyone!
    if (!process.env.PRIVATE_KEY) {
      throw new Error("You're missing PRIVATE_KEY in your .env.local file.");
    }
    console.log(process.env)
    // Initialize the Thirdweb SDK on the serverside
    const sdk = ThirdwebSDK.fromPrivateKey(
      // Your wallet private key (read it in from .env.local file)
      process.env.PRIVATE_KEY,
      "mumbai"
    );

    // Load the NFT Collection via it's contract address using the SDK
    const nftCollection = await sdk.getContract(
      // Use your NFT_COLLECTION_ADDRESS constant
      "0xed8553aFBE7Fa3Cf26637eDC7FF52Daf3C4a8721",
      "nft-collection"
    );

    // Here we can make all kinds of cool checks to see if the user is eligible to mint the NFT.
    // Here are a few examples:

    // 1) Check that it's an animal name from our list of animal names
    // This demonstrates how we can restrict what kinds of NFTs we give signatures for
    // if (!animalNames.includes(nftName?.toLowerCase())) {
    //   res.status(400).json({ error: "That's not one of the animals we know!" });
    //   return;
    // }

    // 2) Check that this wallet hasn't already minted a page - 1 NFT per wallet
    const hasMinted = (await nftCollection.balanceOf(authorAddress)).gt(0);
    if (hasMinted) {
      res.status(400).json({ error: "Already minted" });
      return;
    }

    // If all the checks pass, begin generating the signature...
    // Generate the signature for the page NFT
    const signedPayload = await nftCollection.signature.generate({
      to: authorAddress,
      metadata: {
        name: nftName,
        image:nftImage,
        description: nftDesc
      },
      royaltyRecipient:authorAddress,
      primarySaleRecipient:authorAddress
    });
    // Return back the signedPayload to the client.
    res.status(200).json({
      signedPayload: JSON.parse(JSON.stringify(signedPayload)),
    });
  } catch (e) {
    res.status(500).json({ error: `Server error ${e}` });
  }
}