import officesReducer, {
  getOfficesList,
  deleteOfficesList,
  changeBranchType,
  deleteBranchType,
} from "../store/officesSlice";

describe("Testing officesSlice reducer", () => {
  test("getOfficesList testing", () => {
    expect(
      officesReducer(
        { officesItemList: [], branchType: "" },
        getOfficesList([
          {
            address:
              "Відділення №1: вул. Олега Паршутіна (ран. Аерофлотська), 28",
          },
        ])
      )
    ).toEqual({
      officesItemList: [
        {
          address:
            "Відділення №1: вул. Олега Паршутіна (ран. Аерофлотська), 28",
        },
      ],
      branchType: "",
    });
  });

  test("deleteOfficesList testing", () => {
    expect(
      officesReducer(
        {
          officesItemList: [
            {
              address:
                "Відділення №1: вул. Олега Паршутіна (ран. Аерофлотська), 28",
            },
          ],
          branchType: "",
        },
        deleteOfficesList()
      )
    ).toEqual({ officesItemList: [], branchType: "" });
  });

  test("changeBranchType testing", () => {
    expect(
      officesReducer(
        { officesItemList: [], branchType: "" },
        changeBranchType("Виберіть відділення")
      )
    ).toEqual({ officesItemList: [], branchType: "Виберіть відділення" });
  });

  test("deleteBranchType testing", () => {
    expect(
      officesReducer(
        { officesItemList: [], branchType: "Виберіть відділення" },
        deleteBranchType()
      )
    ).toEqual({ officesItemList: [], branchType: "" });
  });
});
