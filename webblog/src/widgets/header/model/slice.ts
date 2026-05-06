import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type LinksType = {
  title: string;
  link: string;
};

const initialState: {
  links: LinksType[];
  isLoading: boolean;
} = {
  links: [],
  isLoading: false,
};

export const fetchHeaderList = createAsyncThunk(
  'header/get',
  async (links: LinksType[]) => {
    const response = await new Promise<{ title: string; link: string }[]>(
      (resolve) =>
        setTimeout(() => {
          resolve(links);
        }, 1000)
    );
    return response;
  }
);

export const HeaderSlice = createSlice({
  name: 'header',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHeaderList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHeaderList.fulfilled, (state, action) => {
      state.links = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchHeaderList.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { reducer: headerReducer } = HeaderSlice;
