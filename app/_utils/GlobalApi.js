const { gql, default: request } = require("graphql-request");

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

/**
 * Used to Make Get Category API request
 * @returns
 */

const GetCategory = async () => {
  const query = gql`
    query GetCategory {
      categories(first: 50) {
        id
        name
        slug
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const GetInventory = async (category) => {
  const query =
    gql`
    query GetInventory {
      inventories(where: { categories_some: { slug: "` +
    category +
    `" } }) {
        id
        name
        slug
        banner {
          url
        }
        categories {
          name
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const GetProduct = async (productSlug) => {
  const query =
    gql`
    query GetProduct {
      inventory(where: { slug: "` +
    productSlug +
    `" }) {
        id
        name
        description
        price
        banner {
          url
        }
        categories {
          name
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const AddToCart = async (data) => {
  const query =
    gql`
    mutation AddToCart {
      createUserCart(
        data: {
          email: "` +
    data.email +
    `"
          productName: "` +
    data.name +
    `"
          price: ` +
    data.price +
    `,
          productImage: "` +
    data.productImage +
    `"
          productDescription: "` +
    data.description +
    `"
        }
      ) {
        id
      }
      publishManyUserCarts(to: PUBLISHED) {
        count
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const GetUserCart = async (userEmail) => {
  const query =
    gql`
    query GetUserCart {
      userCarts(where: { email: "` +
    userEmail +
    `" }, first: 50) {
        id
        price
        productDescription
        productImage
        productName
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  GetCategory,
  GetInventory,
  GetProduct,
  AddToCart,
  GetUserCart,
};
