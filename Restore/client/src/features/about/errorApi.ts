import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const errorApi = createApi({
    reducerPath: 'errorApi', 
    baseQuery: baseQueryWithErrorHandling, 
    endpoints: (builder) => ({
        get400Erorr: builder.query<void, void>({
            query: () => ({url: 'buggy/bad-request'})
        }), 
        get401Erorr: builder.query<void, void>({
            query: () => ({url: 'buggy/unauthorized'})
        }), 
        get404Erorr: builder.query<void, void>({
            query: () => ({url: 'buggy/not-found'})
        }), 
        get500Erorr: builder.query<void, void>({
            query: () => ({url: 'buggy/server-error'})
        }), 
        getValidationErorr: builder.query<void, void>({
            query: () => ({url: 'buggy/validation-error'})
        }), 
    })
})

export const {
    useLazyGet400ErorrQuery, 
    useLazyGet401ErorrQuery, 
    useLazyGet404ErorrQuery, 
    useLazyGet500ErorrQuery, 
    useLazyGetValidationErorrQuery
} = errorApi ;