import ordersHistoryReducer, {
  getCurrentOrderInfo,
  deleteCurrentOrderInfo,
  addNumToHistoryList,
  deleteHistoryList,
  delItemFromHistList,
} from "../store/ordersHistorySlice";

describe("Testing ordersHistory reducer", () => {
  test("getCurrentOrderInfo testing", () => {
    expect(
      ordersHistoryReducer(
        { currentOrderInfo: [], ordersHistory: [] },
        getCurrentOrderInfo([{ status: "Відправлення отримано" }])
      )
    ).toEqual({
      currentOrderInfo: [{ status: "Відправлення отримано" }],
      ordersHistory: [],
    });
  });

  test("deleteCurrentOrderInfo testing", () => {
    expect(
      ordersHistoryReducer(
        {
          currentOrderInfo: [{ status: "Відправлення отримано" }],
          ordersHistory: [],
        },
        deleteCurrentOrderInfo()
      )
    ).toEqual({
      currentOrderInfo: [],
      ordersHistory: [],
    });
  });

  test("addNumToHistoryList testing", () => {
    expect(
      ordersHistoryReducer(
        {
          currentOrderInfo: [],
          ordersHistory: ["20450761920712"],
        },
        addNumToHistoryList("20450761920713")
      )
    ).toEqual({
      currentOrderInfo: [],
      ordersHistory: ["20450761920712", "20450761920713"],
    });
  });

  test("deleteHistoryList testing", () => {
    expect(
      ordersHistoryReducer(
        {
          currentOrderInfo: [],
          ordersHistory: ["20450761920712"],
        },
        deleteHistoryList()
      )
    ).toEqual({
      currentOrderInfo: [],
      ordersHistory: [],
    });
  });

  test("delItemFromHistList testing", () => {
    expect(
      ordersHistoryReducer(
        {
          currentOrderInfo: [],
          ordersHistory: ["20450761920712"],
        },
        delItemFromHistList("20450761920712")
      )
    ).toEqual({
      currentOrderInfo: [],
      ordersHistory: [],
    });
  });
});
