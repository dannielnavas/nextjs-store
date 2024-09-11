import { GraphQLClientSingleton } from "app/graphql";
import { customerName } from "app/graphql/queries/customerName";
import { cookies } from "next/headers";

export const validateAccessToken = async () => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;
  const graphqlCliente = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    customerAccessToken: accessToken,
  };
  const { customer } = await graphqlCliente.request<{
    customerAccessTokenValidate: any;
    customer: any;
  }>(customerName, variables);
  return customer;
};
