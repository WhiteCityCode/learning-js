/**
 * INBOX
 * From: <Augustus De Morgan> demorgan@bigtech.com
 * Subject: Hey there, we really need your help
 *
 * We're losing money! Our chief of marketing had this idea that we should
 * give discounts to clients who purchase things online such that:
 *
 * Orders with values between 10-100eur get a 15% discount
 * Orders with values between 100-200eur get a 10% discount
 *
 * Jimmy wrote the code, shipped it, and now he's nowhere to be found. Can you
 * please step in and find the bug? Check out the function below and make the
 * tests pass, we're all counting on you!
 *
 * Kind regards,
 * De Morgan
 */

/**
 * @author Jimmy
 * @desc   Getting tired of these marketing shennanigans. We get a list of
 * products from the Products API, with their price included. This function
 * returns the same list, but for each object we have a new `discount`
 * field where we specify the amount of discount in percentages.
 *
 * For example:
 *
 * We receive:
 * [{
 *   name: "BMW heated seats",
 *   price: 20
 * }, {
 *   name: "Heavy mouse",
 *   price: 150
 * }]
 *
 * We should return:
 * [{
 *   name: "BMW heated seats",
 *   price: 20,
 *   discount: 15,
 * }, {
 *   name: "Heavy mouse",
 *   price: 150,
 *   discount: 10,
 * }]
 */

type Product = {
  name: string;
  price: number;
  discount?: number;
};

export const applyDiscount = (products: Product[]) => {
  return products.map((product) => {
    let discount = 0;
    if (product.price >= 10 || product.price <= 100) {
      discount = 15;
    } else if (product.price > 100 || product.price <= 200) {
      discount = 10;
    }

    return {
      ...product,
      discount,
    };
  });
};
