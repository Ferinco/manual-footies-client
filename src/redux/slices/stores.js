import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ShopServices } from "../../services/shopServices";

const initialState = {
  stores: [],
  store: {},
  error: null,
  isLoading: true,
};

export const fetchAllStores = createAsyncThunk(
  "stores/fetchAllStores",
  async (_, { rejectWithValue }) => {
    try {
      const data = await ShopServices.getShops();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const createNewStore = createAsyncThunk(
  "stores/createNewStore",
  async ({ name, description, billboardImage }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const data = await ShopServices.createShop(
        {
          name,
          description,
          billboardImage,
        }
      );
      console.log(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const filterStore = createAsyncThunk(
  "stores/filterStore",
  async ({ id }, { rejectWithValue }) => {
    try {
      const data = await ShopServices.getShops();
      const filteredData = data.filter((datum)=> datum._id === id)
      return (filteredData[0]);
    }catch (error) {
      return rejectWithValue(error);
    }
  }
);

const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllStores.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllStores.fulfilled, (state, action) => {
      state.isLoading = false;
      state.stores = action.payload;
    });
    builder.addCase(fetchAllStores.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(createNewStore.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createNewStore.fulfilled, (state, action) => {
      state.isLoading = false;
      state.stores = [...state.stores, action.payload];
    });
    builder.addCase(createNewStore.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(filterStore.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(filterStore.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(filterStore.fulfilled, (state, action) => {
      state.isLoading = false;
      state.store = action.payload;
    });
  },
});
export default storeSlice.reducer;
