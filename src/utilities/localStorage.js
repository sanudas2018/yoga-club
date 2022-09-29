const addToDb = (id) => {
  let activityCart;
  const storedCart = localStorage.getItem("activity-cart");
  if (storedCart) {
    activityCart = JSON.parse(storedCart);
  } else {
    activityCart = {};
  }

  const time = activityCart[id];
  if (time) {
    const newTime = time + 1;
    activityCart[id] = newTime;
  } else {
    activityCart[id] = 1;
  }
  localStorage.setItem("activity-cart", JSON.stringify(activityCart));
};
const getStoredCart = () => {
  let activityCart;
  const storedCart = localStorage.getItem("activity-cart");
  if (storedCart) {
    activityCart = JSON.parse(storedCart);
  } else {
    activityCart = {};
  }
  return activityCart;
};
export { addToDb, getStoredCart };
