import { GraphQLClientSingleton } from "app/graphql";
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate";

import { cookies } from "next/headers";

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies();
  const graphqlCliente = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    email,
    password,
  };
  const { customerAccessTokenCreate }: { customerAccessTokenCreate: any } =
    await graphqlCliente.request(customerAccessTokenCreateMutation, variables);

  const { customerAccessToken } = customerAccessTokenCreate;

  const { accessToken, expiresAt } = customerAccessToken;

  if (accessToken) {
    cookiesStore.set("accessToken", accessToken, {
      expires: new Date(expiresAt),
      // secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      httpOnly: true,
    });
  }
  return accessToken;
};
