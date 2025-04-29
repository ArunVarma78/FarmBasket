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

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const GetInventory = async (category) => {
  const query = gql`
    query GetInventory {
      inventories(where: { categories_some: { slug: "${category}" } }) {
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

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    throw error;
  }
};

const GetProduct = async (productSlug) => {
  const query = gql`
    query GetProduct {
      inventory(where: { slug: "${productSlug}" }) {
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

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

const AddToCart = async (data) => {
  const query = gql`
    mutation AddToCart {
      createUserCart(
        data: {
          email: "${data.email}"
          productName: "${data.productName}"
          price: ${data.price}
          productImage: "${data.productImage}"
          productDescription: "${data.productDescription}"
        }
      ) {
        id
      }
      publishManyUserCarts(to: PUBLISHED) {
        count
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

const GetUserCart = async (userEmail) => {
  const query = gql`
    query GetUserCart {
      userCarts(where: { email: "${userEmail}" }, first: 50) {
        id
        price
        productDescription
        productImage
        productName
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching user cart:", error);
    throw error;
  }
};

const DeleteCartProduct = async (id) => {
  const query = gql`
    mutation DeleteCartProduct {
      deleteUserCart(where: { id: "${id}" }) {
        id
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error deleting cart product:", error);
    throw error;
  }
};

export default {
  GetCategory,
  GetInventory,
  GetProduct,
  AddToCart,
  GetUserCart,
  DeleteCartProduct,
};
