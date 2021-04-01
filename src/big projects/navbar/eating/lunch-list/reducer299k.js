export const reducer = (state, action) => {
  if (action.type === "EQUAL_1") {
    state = {
      ...state,
      quantity: 1,
    };
  }
  if (action.type === "EQUAL_50") {
    state = {
      ...state,
      quantity: 50,
    };
  }

  if (action.type === "INCREASE") {
    state = {
      ...state,
      quantity: state.quantity + 1,
      price:
        state.price +
        59000 * state.dayPerWeek +
        2000 * state.quantityRice * state.dayPerWeek +
        2000 * state.quantitySpoonChopstick * state.dayPerWeek +
        10000 * state.quantityBlackCoffee * state.dayPerWeek +
        10000 * state.quantityLemonTea * state.dayPerWeek +
        15000 * state.quantityMilkCoffee * state.dayPerWeek,
    };
  }
  if (action.type === "DECREASE") {
    state = {
      ...state,
      quantity: state.quantity - 1,
      price:
        state.price -
        59000 * state.dayPerWeek -
        2000 * state.quantityRice * state.dayPerWeek -
        2000 * state.quantitySpoonChopstick * state.dayPerWeek -
        10000 * state.quantityBlackCoffee * state.dayPerWeek -
        10000 * state.quantityLemonTea * state.dayPerWeek -
        15000 * state.quantityMilkCoffee * state.dayPerWeek,
    };
  }

  if (action.type === "CLICK") {
    switch (action.payload) {
      case "monday":
        return {
          ...state,
          dayPerWeek: state.dayPerWeek + 1,
          price:
            state.price +
            59000 * state.quantity +
            2000 * state.quantityRice * state.quantity +
            2000 * state.quantitySpoonChopstick * state.quantity +
            10000 * state.quantityBlackCoffee * state.quantity +
            10000 * state.quantityLemonTea * state.quantity +
            15000 * state.quantityMilkCoffee * state.quantity,
        };
      case "tuesday":
        return {
          ...state,
          dayPerWeek: state.dayPerWeek + 1,
          price:
            state.price +
            59000 * state.quantity +
            2000 * state.quantityRice * state.quantity +
            2000 * state.quantitySpoonChopstick * state.quantity +
            10000 * state.quantityBlackCoffee * state.quantity +
            10000 * state.quantityLemonTea * state.quantity +
            15000 * state.quantityMilkCoffee * state.quantity,
        };
      case "wednesday":
        return {
          ...state,
          dayPerWeek: state.dayPerWeek + 1,
          price:
            state.price +
            59000 * state.quantity +
            2000 * state.quantityRice * state.quantity +
            2000 * state.quantitySpoonChopstick * state.quantity +
            10000 * state.quantityBlackCoffee * state.quantity +
            10000 * state.quantityLemonTea * state.quantity +
            15000 * state.quantityMilkCoffee * state.quantity,
        };
      case "thursday":
        return {
          ...state,
          dayPerWeek: state.dayPerWeek + 1,
          price:
            state.price +
            59000 * state.quantity +
            2000 * state.quantityRice * state.quantity +
            2000 * state.quantitySpoonChopstick * state.quantity +
            10000 * state.quantityBlackCoffee * state.quantity +
            10000 * state.quantityLemonTea * state.quantity +
            15000 * state.quantityMilkCoffee * state.quantity,
        };
      case "friday":
        return {
          ...state,
          dayPerWeek: state.dayPerWeek + 1,
          price:
            state.price +
            59000 * state.quantity +
            2000 * state.quantityRice * state.quantity +
            2000 * state.quantitySpoonChopstick * state.quantity +
            10000 * state.quantityBlackCoffee * state.quantity +
            10000 * state.quantityLemonTea * state.quantity +
            15000 * state.quantityMilkCoffee * state.quantity,
        };
      case "morerice":
        return {
          ...state,
          quantityRice: state.quantityRice + 1,
          price: state.price + 2000 * state.quantity * state.dayPerWeek,
        };
      case "spoonchopstick":
        return {
          ...state,
          quantitySpoonChopstick: state.quantitySpoonChopstick + 1,
          price: state.price + 2000 * state.quantity * state.dayPerWeek,
        };
      case "blackcoffee":
        return {
          ...state,
          quantityBlackCoffee: state.quantityBlackCoffee + 1,
          price: state.price + 10000 * state.quantity * state.dayPerWeek,
        };
      case "lemontea":
        return {
          ...state,
          quantityLemonTea: state.quantityLemonTea + 1,
          price: state.price + 10000 * state.quantity * state.dayPerWeek,
        };
      case "milkcoffee":
        return {
          ...state,
          quantityMilkCoffee: state.quantityMilkCoffee + 1,
          price: state.price + 15000 * state.quantity * state.dayPerWeek,
        };
      default:
        break;
    }
  }
  if (action.type === "UN_CLICK") {
    switch (action.payload) {
      case "monday":
        return {
          ...state,
          dayPerWeek: state.dayPerWeek - 1,
          price:
            state.price -
            59000 * state.quantity -
            2000 * state.quantityRice * state.quantity -
            2000 * state.quantitySpoonChopstick * state.quantity -
            10000 * state.quantityBlackCoffee * state.quantity -
            10000 * state.quantityLemonTea * state.quantity -
            15000 * state.quantityMilkCoffee * state.quantity,
        };
      case "tuesday":
        return {
          ...state,
          dayPerWeek: state.dayPerWeek - 1,
          price:
            state.price -
            59000 * state.quantity -
            2000 * state.quantityRice * state.quantity -
            2000 * state.quantitySpoonChopstick * state.quantity -
            10000 * state.quantityBlackCoffee * state.quantity -
            10000 * state.quantityLemonTea * state.quantity -
            15000 * state.quantityMilkCoffee * state.quantity,
        };
      case "wednesday":
        return {
          ...state,
          dayPerWeek: state.dayPerWeek - 1,
          price:
            state.price -
            59000 * state.quantity -
            2000 * state.quantityRice * state.quantity -
            2000 * state.quantitySpoonChopstick * state.quantity -
            10000 * state.quantityBlackCoffee * state.quantity -
            10000 * state.quantityLemonTea * state.quantity -
            15000 * state.quantityMilkCoffee * state.quantity,
        };
      case "thursday":
        return {
          ...state,
          dayPerWeek: state.dayPerWeek - 1,
          price:
            state.price -
            59000 * state.quantity -
            2000 * state.quantityRice * state.quantity -
            2000 * state.quantitySpoonChopstick * state.quantity -
            10000 * state.quantityBlackCoffee * state.quantity -
            10000 * state.quantityLemonTea * state.quantity -
            15000 * state.quantityMilkCoffee * state.quantity,
        };
      case "friday":
        return {
          ...state,
          dayPerWeek: state.dayPerWeek - 1,
          price:
            state.price -
            59000 * state.quantity -
            2000 * state.quantityRice * state.quantity -
            2000 * state.quantitySpoonChopstick * state.quantity -
            10000 * state.quantityBlackCoffee * state.quantity -
            10000 * state.quantityLemonTea * state.quantity -
            15000 * state.quantityMilkCoffee * state.quantity,
        };
      case "morerice":
        return {
          ...state,
          quantityRice: state.quantityRice - 1,
          price: state.price - 2000 * state.quantity * state.dayPerWeek,
        };
      case "spoonchopstick":
        return {
          ...state,
          quantitySpoonChopstick: state.quantitySpoonChopstick - 1,
          price: state.price - 2000 * state.quantity * state.dayPerWeek,
        };
      case "blackcoffee":
        return {
          ...state,
          quantityBlackCoffee: state.quantityBlackCoffee - 1,
          price: state.price - 10000 * state.quantity * state.dayPerWeek,
        };
      case "lemontea":
        return {
          ...state,
          quantityLemonTea: state.quantityLemonTea - 1,
          price: state.price - 10000 * state.quantity * state.dayPerWeek,
        };
      case "milkcoffee":
        return {
          ...state,
          quantityMilkCoffee: state.quantityMilkCoffee - 1,
          price: state.price - 15000 * state.quantity * state.dayPerWeek,
        };
      default:
        break;
    }
  }

  if (action.type === "SAVE_CHECKED") {
    switch (action.payload) {
      case "monday":
        return {
          ...state,
          isChecked2: true,
        };
      case "tuesday":
        return {
          ...state,
          isChecked3: true,
        };
      case "wednesday":
        return {
          ...state,
          isChecked4: true,
        };
      case "thursday":
        return {
          ...state,
          isChecked5: true,
        };
      case "friday":
        return {
          ...state,
          isChecked6: true,
        };
      case "morerice":
        return {
          ...state,
          checkRice: true,
        };
      case "spoonchopstick":
        return {
          ...state,
          checkSpoonChopstick: true,
        };
      case "blackcoffee":
        return {
          ...state,
          checkBlackCoffee: true,
        };
      case "lemontea":
        return {
          ...state,
          checkLemonTea: true,
        };
      case "milkcoffee":
        return {
          ...state,
          checkMilkCoffee: true,
        };
      default:
        break;
    }
  }
  if (action.type === "UNSAVE_CHECKED") {
    switch (action.payload) {
      case "monday":
        return {
          ...state,
          isChecked2: false,
        };
      case "tuesday":
        return {
          ...state,
          isChecked3: false,
        };
      case "wednesday":
        return {
          ...state,
          isChecked4: false,
        };
      case "thursday":
        return {
          ...state,
          isChecked5: false,
        };
      case "friday":
        return {
          ...state,
          isChecked6: false,
        };
      case "morerice":
        return {
          ...state,
          checkRice: false,
        };
      case "spoonchopstick":
        return {
          ...state,
          checkSpoonChopstick: false,
        };
      case "blackcoffee":
        return {
          ...state,
          checkBlackCoffee: false,
        };
      case "lemontea":
        return {
          ...state,
          checkLemonTea: false,
        };
      case "milkcoffee":
        return {
          ...state,
          checkMilkCoffee: false,
        };
      default:
        break;
    }
  }

  return state;
};
