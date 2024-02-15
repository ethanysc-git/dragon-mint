import { gql } from "@apollo/client";

const GET_ACTIVE_ITEMS = gql`
  {
    itemActives(
      first: 100
      where: { buyer: "0x0000000000000000000000000000000000000000" }
    ) {
      id
      tokenId
      seller
      buyer
      nftAddress
      tokenUri
      price
    }
  }
`;
export default GET_ACTIVE_ITEMS;
