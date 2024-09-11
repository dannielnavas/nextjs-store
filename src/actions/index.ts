"use server";
import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAccessToken } from "app/utils/auth/createAccessToken";
import { redirect } from "next/navigation";

// corre en el servidor

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject.password_confirmation;
  const graphqlCliente = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    input: {
      ...formDataObject,
      phone: "+57" + formDataObject.phone,
      acceptsMarketing: true,
    },
  };
  const { customerCreate } = await graphqlCliente.request<{ customerCreate: any }>(
    createUserMutation,
    variables
  );
  const { customer, customerAccessToken } = customerCreate;

  const data = {
    customer,
    customerAccessToken,
  };

  console.log(data);

  if (customer.firstName) {
    await createAccessToken(
      formDataObject.email as string,
      formDataObject.password as string
    );
    redirect("/store");
  }
};

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accessToken = await createAccessToken(
    formDataObject.email as string,
    formDataObject.password as string
  );
  if (accessToken) {
    redirect("/store");
  }
};
