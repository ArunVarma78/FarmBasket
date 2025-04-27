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

export default {
  GetCategory,
  GetInventory,
  GetProduct,
};
