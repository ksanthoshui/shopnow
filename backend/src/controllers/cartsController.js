import userModel from "../modules/userModel.js";

// add product to user cart

const addCart = async (req, res) => {
  const { userId, itemId, size } = req.body;

  const userData = await userModel.findById(userId);
  let cartData = await userData.cartData;
  try {
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.send({ success: true, message: "add to cart " });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};

// update user cart

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    cartData[itemId][size] = quantity;
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.send({ success: true, message: "cart updated " });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};

// get user cart  data

const getCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.send({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};

export { addCart, updateCart, getCart };
